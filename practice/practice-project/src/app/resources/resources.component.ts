import { Component, OnInit } from "@angular/core";
import { ResourcesService } from "./resources.service";
import { Resource } from "./resource";
import { ActivatedRoute } from "@angular/router";

function linkRevert(param: string) {
	return param
		.split("-")
		.map((p) => p[0].toUpperCase() + p.slice(1))
		.join(" ");
}

@Component({
	selector: "app-resources",
	templateUrl: "./resources.component.html",
	styleUrl: "./resources.component.css",
})
export class ResourcesComponent implements OnInit {
	resourceType!: string;

	get resources(): Resource[] {
		return this.resourcesService.getResources(this.resourceType);
	}

	constructor(
		private resourcesService: ResourcesService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe(
			(param) =>
				(this.resourceType = linkRevert(param.get("type") as string))
		);
	}
}
