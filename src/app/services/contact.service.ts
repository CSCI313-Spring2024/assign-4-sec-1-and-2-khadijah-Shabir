import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private contactsList: Contact[] = [
    { id: 1, fName: 'John', lName: 'Adams', phoneNumber: '701-000-1000', email: 'john@email.com' },
    { id: 2, fName: 'Mary', lName: 'Jane', phoneNumber: '701-000-1000', email: 'mary@email.com' }
  ];

  private contacts$ = new BehaviorSubject<Contact[]>(this.contactsList);
  getContacts() {
    return this.contacts$.asObservable();
  }

  addContact(contact: Contact) {
    contact.id = Date.now(); // simple ID
    this.contactsList.push(contact);
    this.contacts$.next(this.contactsList);
  }

  updateContact(updated: Contact) {
    const index = this.contactsList.findIndex(c => c.id === updated.id);
    if (index !== -1) this.contactsList[index] = updated;
    this.contacts$.next(this.contactsList);
  }

  deleteContact(id: number) {
    this.contactsList = this.contactsList.filter(c => c.id !== id);
    this.contacts$.next(this.contactsList);
  }
}
