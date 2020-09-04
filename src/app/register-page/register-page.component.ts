import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { Router } from "@angular/router";

@Component({
    selector: "app-register-page",
    templateUrl: "./register-page.component.html",
    styleUrls: ["./register-page.component.css"],
})
export class RegisterPageComponent implements OnInit {
    user: User;
    isMobileFieldValid: boolean;
    emailPattern: string = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}";

    constructor(private router: Router) {
        this.user = new User();
    }

    ngOnInit() {}

    hasError(event) {
        console.log("Has Error: ", event);
        this.isMobileFieldValid = event;
    }

    getNumber(event) {
        console.log("getNumber: ", event);
    }

    telInputObject(event) {
        console.log("telInputObject: ", event);
    }

    onCountryChange(event) {
        console.log("onCountryChange: ", event);
    }

    onSubmit() {
        this.router.navigateByUrl("/dashboard");
    }
}
