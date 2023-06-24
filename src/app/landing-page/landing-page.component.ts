import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  userEmail!: string;

  constructor(private router: Router) {}

  onNavigate(path: string): void {
    this.router.navigateByUrl(path);
  }

  onSubmitForm(form: NgForm): void {
    console.log(form.value);
  }
}
