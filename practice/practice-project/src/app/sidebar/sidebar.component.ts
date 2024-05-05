import { Component } from "@angular/core";
import { ResourcesService } from "../resources/resources.service";

@Component({
	selector: "app-sidebar",
	templateUrl: "./sidebar.component.html",
	styleUrl: "./sidebar.component.css",
})
export class SidebarComponent {
	sidebarItems = this.resoucesService.resourceTypes;

	constructor(private resoucesService: ResourcesService) {}

	open() {
		this.resoucesService.openModal();
	}
}
