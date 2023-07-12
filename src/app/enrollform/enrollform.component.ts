import { Component } from '@angular/core';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}

@Component({
  selector: 'app-enrollform',
  templateUrl: './enrollform.component.html',
  styleUrls: ['./enrollform.component.css']
})
export class EnrollformComponent {
  formData: FormData = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zip: ''
  };

  submitForm(): void {
    // Handle form submission logic here
    console.log('Enrollment form submitted:', this.formData);
    // You can perform further actions such as sending data to a server, etc.
  }
}
