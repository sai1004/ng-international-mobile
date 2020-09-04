import { Component } from "@angular/core";
import { User } from "./user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "buildingBlock";

  user: User;

  emailPattern: string = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}";

  constructor() {
    this.user = new User();
  }

  hasError(event) {
    console.log(event);
  }

  getNumber(event) {
    console.log(event);
  }

  telInputObject(event) {
    console.log(event);
  }

  onCountryChange(event) {
    console.log(event);
  }

  onSubmit() {}
}
