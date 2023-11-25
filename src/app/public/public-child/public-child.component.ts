import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'llg-public-child',
  templateUrl: './public-child.component.html',
  styleUrls: ['./public-child.component.css']
})
export class PublicChildComponent {
  valid: boolean = false;
  constructor(private router: Router) {}

  get isChecked() {
    return this.valid;
  }

  toggleValidity() {
    this.valid = !this.valid;
  }

  goHome() {
    this.router.navigate(['home']);
  }
}
