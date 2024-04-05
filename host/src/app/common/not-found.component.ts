import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    ButtonModule
  ],
  template: `
    <div class="min-h-screen min-w-screen flex flex-column align-items-center justify-content-center">
      <div class="p-3 text-center">
        <div class="text-3xl text-gray-700">Page Not Found!</div>
        <div class="mt-3">
          <button (click)="gotoLogin()" class="p-button-secondary" pButton label="Goto Login"></button>
        </div>
      </div>
    </div>`
})

export class NotFoundComponent {
  constructor(private router: Router) {
  }

  gotoLogin() {
    this.router.navigate(['/login'])
  }
}
