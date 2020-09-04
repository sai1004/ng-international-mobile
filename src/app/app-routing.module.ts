import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";

const routes: Routes = [
    { path: "", component: RegisterPageComponent },
    { path: "dashboard", component: DashboardPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
