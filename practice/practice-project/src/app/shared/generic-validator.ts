import { FormGroup } from "@angular/forms";

export class GenericValidator {
	constructor(
		private validationMessages: { [key: string]: { [key: string]: string } }
	) {}

	processMessages(formGroup: FormGroup): { [key: string]: string } {
		const messages: { [key: string]: string } = {};

		for (const controlKey in formGroup.controls) {
			const control = formGroup.controls[controlKey];
			if (this.validationMessages[controlKey]) {
				messages[controlKey] = "";
				if ((control.touched || control.dirty) && control.errors) {
					messages[controlKey] = Object.keys(control.errors)
						.map(
							(errorKey) =>
								this.validationMessages[controlKey]?.[
									errorKey
								] || ""
						)
						.join(" ");
				}
			}
		}
		return messages;
	}
}
