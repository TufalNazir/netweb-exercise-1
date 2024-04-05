import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  standalone: true,
  imports: [CommonModule, LoginModule],
  selector: 'app-login-entry',
  template: `<login></login>`,
})
export class RemoteEntryComponent {}
