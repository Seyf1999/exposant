import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css'],
})
export class UsComponent {
  contacts: any;
  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.refrech();
  }

  createContact(contactForm: any) {
    let idContact = contactForm.value.idContact;
    let nom = contactForm.value.nom;
    let Email = contactForm.value.Email;
    let Message = contactForm.value.Message;
    let contact = {
      idContact: idContact,
      nom: nom,
      Email: Email,
      Message: Message,
    };

    this.contactService.addContact(contact).subscribe((data) => {
      alert('Message Envoyé !');
      console.log(data);
      this.router.navigate(['/home']);
    });
  }
  refrech() {
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data;
      console.log(this.contacts);
    });
  }
}
