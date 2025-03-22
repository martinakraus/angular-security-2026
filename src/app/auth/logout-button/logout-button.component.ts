import { DOCUMENT } from "@angular/common";
import { Component, inject } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: "app-logout-button",
  template: '<button (click)="logout()">Log out</button>',
  styleUrl: "./logout-button.component.scss",
})
export class LogoutButtonComponent {
  private auth = inject(AuthService);
  private doc = inject(DOCUMENT);

  logout() {
    this.auth.logout({ logoutParams: { returnTo: this.doc.location.origin } });
  }
}
