import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResourceEditComponent } from "./resource-edit/resource-edit.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ResourcesComponent } from "./resources.component";
import { SharedModule } from "../shared/shared.module";
import { ResourcesRoutingModule } from "./resources-routing.module";

@NgModule({
	declarations: [ResourceEditComponent, ResourcesComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		NgbModule,
		SharedModule,
		ResourcesRoutingModule,
	],
	exports: [ResourcesComponent],
})
export class ResourcesModule {}
