import { Injectable } from "@angular/core";
import { Resource } from "./resource";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ResourceEditComponent } from "./resource-edit/resource-edit.component";

@Injectable({
	providedIn: "root",
})
export class ResourcesService {
	resourceTypes = [
		"Article",
		"Guide To Practice",
		"Course",
		"Lecture",
		"Explainer",
	];

	resources: Resource[] = [
		{
			resourceName: "test",
			resourceType: "Article",
			validDate: new Date(),
			ausmedLibraryResource: true,
			educators: "",
			duration: 30,
		},
	];

	constructor(private modalService: NgbModal) {}

	getResources(resourceType: string) {
		return this.resources.filter(
			(resource) => resource.resourceType === resourceType
		);
	}

	addResource(resource: Resource) {
		this.resources.push(resource);
	}

	openModal() {
		this.modalService.open(ResourceEditComponent, { size: "xl" });
	}

	closeModal() {
		this.modalService.dismissAll();
	}
}
