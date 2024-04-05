import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';

@Component({
  standalone: true,
  imports: [CommonModule, StudentComponent],
  selector: 'app-student-entry',
  template: `<student></student>`,
})
export class RemoteEntryComponent {}
