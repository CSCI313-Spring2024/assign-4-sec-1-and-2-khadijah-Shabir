import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [ContactCardComponent, NgFor, FormsModule],
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  // new contact form data
  newContact: Contact = {
    id: 0,
    fName: '',
    lName: '',
    phoneNumber: '',
    email: ''
  };

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(data => this.contacts = data);
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter(c => c.id !== id);
  }

  updateContact(updated: Contact) {
    const index = this.contacts.findIndex(c => c.id === updated.id);
    if (index !== -1) {
      this.contacts[index] = { ...updated };
    }
  }

  handleAddContact() {
    if (
      !this.newContact.fName.trim() ||
      !this.newContact.lName.trim() ||
      !this.newContact.phoneNumber.trim() ||
      (this.newContact.email ?? '').trim()
    ) {
      
    }

    // mock id generation
    this.newContact.id = Math.max(...this.contacts.map(c => c.id), 0) + 1;
    this.contacts.push({ ...this.newContact });

    // clear form
    this.newContact = {
      id: 0,
      fName: '',
      lName: '',
      phoneNumber: '',
      email: ''
    };
  }
}
