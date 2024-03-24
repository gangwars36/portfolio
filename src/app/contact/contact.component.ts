import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
  }
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Replace 'your_service_id' and 'your_template_id' with your EmailJS service ID and template ID.
      const templateParams = {
        to_name: 'Sachin Gangwar', // You may replace with an actual recipient's name
        from_name: formData.name,
        message: formData.message,
        email: formData.email,
        phone: formData.phone
      };

      emailjs.send('service_botau74', 'template_rtcze4q', templateParams)
        .then((response: EmailJSResponseStatus) => {
          console.log('Email sent successfully', response);
          // Reset the form after successful submission
          this.contactForm.reset();
          this.router.navigate(['/']);
        }, (error) => {
          console.error('Error sending email', error);
        });
    }
  }

}
