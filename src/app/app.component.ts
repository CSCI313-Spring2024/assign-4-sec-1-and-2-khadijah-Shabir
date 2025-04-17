import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactFormComponent, ContactListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-4';
}
