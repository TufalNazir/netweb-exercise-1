import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../host/src/app/common/navbar/navbar.component';
import { TableModule } from 'primeng/table';

interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
}


@Component({
  selector: 'student',
  standalone: true,
  imports: [CommonModule, NavbarComponent, TableModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StudentComponent {
  students: Student[] = [
    { id: 1, name: 'John Doe', age: 20, grade: 'A' },
    { id: 2, name: 'Jane Smith', age: 21, grade: 'B' },
    { id: 3, name: 'Michael Johnson', age: 19, grade: 'A-' },
    { id: 4, name: 'Emily Brown', age: 22, grade: 'B+' },
    { id: 5, name: 'Daniel Lee', age: 20, grade: 'A' },
    { id: 6, name: 'Olivia Wilson', age: 21, grade: 'B-' },
    { id: 7, name: 'William Martinez', age: 19, grade: 'C' },
    { id: 8, name: 'Sophia Anderson', age: 22, grade: 'A+' },
    { id: 9, name: 'Matthew Taylor', age: 20, grade: 'B' },
    { id: 10, name: 'Emma Garcia', age: 21, grade: 'A-' }
  ];

}
