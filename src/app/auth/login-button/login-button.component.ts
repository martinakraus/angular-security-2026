import { Component } from "@angular/core";

@Component({
  selector: "app-login-button",
  template:
    '<button class="button_login" (click)="loginWithRedirect()">Login</button>',
  styleUrl: "./login-button.component.scss",
})
export class LoginButtonComponent {
  loginWithRedirect() {
    // ToDo implement login
  }
}
