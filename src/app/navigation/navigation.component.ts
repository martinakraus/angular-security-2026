import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { LoginButtonComponent } from "../auth/login-button/login-button.component";
import { LogoutButtonComponent } from "../auth/logout-button/logout-button.component";

@Component({
  selector: "app-navigation",
  imports: [
    RouterLink,
    RouterLinkActive,
    LoginButtonComponent,
    LogoutButtonComponent,
  ],
  templateUrl: "./navigation.component.html",
  styleUrl: "./navigation.component.scss",
})
export class NavigationComponent {}
