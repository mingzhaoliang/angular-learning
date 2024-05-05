import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ResourcesModule } from "./resources/resources.module";
import { SharedModule } from "./shared/shared.module";
import { ResourcesRoutingModule } from "./resources/resources-routing.module";

@NgModule({
	declarations: [AppComponent, SidebarComponent],
	imports: [
		ResourcesRoutingModule,
		AppRoutingModule,
		BrowserModule,
		NgbModule,
		ResourcesModule,
		SharedModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
