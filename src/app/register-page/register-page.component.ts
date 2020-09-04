import { Component, OnInit } from "@angular/core";
import { User } from "../user";

@Component({
    selector: "app-register-page",
    templateUrl: "./register-page.component.html",
    styleUrls: ["./register-page.component.css"],
})
export class RegisterPageComponent implements OnInit {
    user: User;
    isMobileFieldValid: boolean;

    constructor() {
        this.user = new User();
    }

    ngOnInit() {}

    emailPattern: string = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}";

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

    onSubmit() {}
}
