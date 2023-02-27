import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './model/Contact';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:3000/contacts';
  /*
  @functions
  */
  // get all conatct
  getContacts() {
    return this.http.get<Contact[]>(this.baseUrl);
  }
  getContactById(id: number) {
    return this.http.get<Contact>(this.baseUrl + '/' + id);
  }

  getContactByLastName(lastName: string) {
    return this.http.get<Contact>(this.baseUrl + '/' + lastName);
  }

  getContactByFirstName(firstName: string) {
    return this.http.get<Contact>(this.baseUrl + '/' + firstName);
  }
  // create contact
  createContact(contact: Contact) {
    return this.http.post(this.baseUrl, contact);
  }
  // modify contact
  updateContact(contact: Contact) {
    return this.http.put(this.baseUrl + '/' + contact.id, contact);
  }

  // delete contact
  deleteContact(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
