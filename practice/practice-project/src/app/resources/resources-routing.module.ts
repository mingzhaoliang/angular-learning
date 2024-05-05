import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ResourcesComponent } from "./resources.component";

const routes: Routes = [
	{
		path: ":type",
		component: ResourcesComponent,
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ResourcesRoutingModule {}
