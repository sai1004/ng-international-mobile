import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { Ng2TelInputModule } from "ng2-tel-input";
import { RegisterPageComponent } from './register-page/register-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [AppComponent, RegisterPageComponent, DashboardPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, Ng2TelInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
