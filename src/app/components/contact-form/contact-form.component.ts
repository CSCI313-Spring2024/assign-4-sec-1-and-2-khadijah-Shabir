import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../../models/contact.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {
  internalContact: Contact = { id: 0, fName: '', lName: '', phoneNumber: '', email: '' };

  @Input() isEditMode = false;

  @Input() set contact(value: Contact) {
    this.internalContact = { ...value };
  }

  @Output() formSubmit = new EventEmitter<Contact>();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.formSubmit.emit(this.internalContact);
      form.resetForm();
    }
  }
}
