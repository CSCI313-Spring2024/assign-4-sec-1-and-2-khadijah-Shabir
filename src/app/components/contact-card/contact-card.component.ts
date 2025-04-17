import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  templateUrl: './contact-card.component.html',
  imports: [FormsModule,NgIf]
})
export class ContactCardComponent {
  @Input() contact!: Contact;
  @Output() delete = new EventEmitter<number>();
  @Output() save = new EventEmitter<Contact>();

  editMode = false;

  editedContact: Contact = { id: 0, fName: '', lName: '', phoneNumber: '', email: '' };

  enableEdit() {
    this.editMode = true;
    this.editedContact = { ...this.contact }; // clone to avoid mutating
  }

  cancelEdit() {
    this.editMode = false;
  }

  submitEdit() {
    this.save.emit(this.editedContact);
    this.editMode = false;
  }
}

