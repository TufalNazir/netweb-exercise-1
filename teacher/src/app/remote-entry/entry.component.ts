import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher.component';

@Component({
  standalone: true,
  imports: [CommonModule, TeacherComponent],
  selector: 'app-student-entry',
  template: `<student></student>`,
})
export class RemoteEntryComponent {}
