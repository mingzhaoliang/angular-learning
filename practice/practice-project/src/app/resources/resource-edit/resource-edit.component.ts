import {
	AfterViewInit,
	Component,
	ElementRef,
	ViewChildren,
} from "@angular/core";
import {
	AbstractControl,
	FormBuilder,
	FormControlName,
	FormGroup,
	ValidatorFn,
	Validators,
} from "@angular/forms";
import { ResourcesService } from "../resources.service";
import {
	Observable,
	debounceTime,
	distinctUntilChanged,
	fromEvent,
	merge,
} from "rxjs";
import { GenericValidator } from "../../shared/generic-validator";

function rangeValidator(min: number, max: number): ValidatorFn {
	return (c: AbstractControl): { [key: string]: boolean } | null => {
		const value = c.value;
		if (value >= min && value <= max) return null;
		return { range: true };
	};
}

@Component({
	selector: "app-resource-edit",
	templateUrl: "./resource-edit.component.html",
	styleUrl: "./resource-edit.component.css",
})
export class ResourceEditComponent implements AfterViewInit {
	@ViewChildren(FormControlName, { read: ElementRef })
	formInputElements!: ElementRef[];
	displayMessage: { [key: string]: string } = {};
	errorMessage: string = "";

	private genericValidator: GenericValidator;
	private validationMessages: { [key: string]: { [key: string]: string } };

	resourceForm: FormGroup = this.formBuilder.group({
		resourceName: ["", Validators.required],
		resourceType: ["Article", Validators.required],
		validDate: [
			new Date().toISOString().substring(0, 10),
			Validators.required,
		],
		ausmedLibraryResource: false,
		educators: "",
		duration: [1, [Validators.required, rangeValidator(1, 60)]],
	});

	resourceTypes = this.resourcesService.resourceTypes;

	constructor(
		private formBuilder: FormBuilder,
		private resourcesService: ResourcesService
	) {
		this.validationMessages = {
			resourceName: {
				required: "Resource name is required.",
			},
			resourceType: {
				required: "Resource type is required.",
			},
			validDate: {
				required: "A valid date is required.",
			},
			duration: {
				range: "Enter a duration between 1 and 60 minutes.",
				required: "Duration is required.",
			},
		};

		this.genericValidator = new GenericValidator(this.validationMessages);
	}

	ngAfterViewInit(): void {
		const controlBlurs: Observable<Event>[] = this.formInputElements.map(
			(formControl: ElementRef) =>
				fromEvent(formControl.nativeElement, "blur")
		);

		merge(this.resourceForm.valueChanges, ...controlBlurs)
			.pipe(debounceTime(500))
			.subscribe(() => {
				this.displayMessage = this.genericValidator.processMessages(
					this.resourceForm
				);
			});

		for (const controlKey in this.resourceForm.controls) {
			const control = this.resourceForm.controls[controlKey];
			control.valueChanges
				.pipe(debounceTime(1000), distinctUntilChanged())
				.subscribe(() => {
					console.log(controlKey + ": " + control.value);
				});
		}
	}

	save() {
		if (this.resourceForm.valid) {
			this.resourcesService.addResource(this.resourceForm.value);
			this.onSaveComplete();
		} else {
			this.errorMessage = "Please correct the validation errors.";
		}
	}

	onSaveComplete(): void {
		this.resourceForm.reset();
		this.resourcesService.closeModal();
	}
}
