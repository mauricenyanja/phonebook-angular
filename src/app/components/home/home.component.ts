import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../model/Contact'
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  contactList!: Contact[];

  constructor(private router: Router, private contactService: ContactService) {}

  test: string = '';

  ngOnInit() {
    this.contactService.getContacts().subscribe((data) => {
      this.contactList = data.sort((a, b) => {
        return a.firstName.toLowerCase() + b.firstName.toLowerCase() ? 1 : -1;
      });
    });
  }
  addContact(): void {
    this.router.navigate(['addContact']);
  }
  //edit the contact
  editContact(contact: Contact): void {
    localStorage.removeItem('editContactId');
    localStorage.setItem('editContactId', contact.id.toString());
    this.router.navigate(['editContact']);
  }
  /*
  deleteContact
  */
  deleteContact(contact: Contact): void {
    this.contactService.deleteContact(contact.id).subscribe((data) => {
      this.contactList = this.contactList.filter((c) => c !== contact);
    });
  }
}
