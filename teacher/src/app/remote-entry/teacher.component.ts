import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../host/src/app/common/navbar/navbar.component';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { AuthService } from '../../../../host/src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'student',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SharedModule, TableModule],
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeacherComponent implements OnInit{

  constructor(private authService: AuthService,
              private router: Router) {
  }
  ngOnInit(): void {
      if(this.authService.isUserLoggedIn.role === 'user') {
        this.router.navigate(['/student']);
      }
  }
  teachers: any[] = [
    { name: 'John Doe', exp: 20, department: 'COMPUTER SCIENCE' },
    { name: 'Jane Smith', exp: 21, department: 'HISTORY' },
    { name: 'Michael Johnson', exp: 19, department: 'COMPUTER SCIENCE' },
    { name: 'Emily Brown', exp: 22, department: 'AI & ML' },
    { name: 'Daniel Lee', exp: 20, department: 'HISTORY' },
    { name: 'Olivia Wilson', exp: 21, department: 'AI & ML' },
    { name: 'William Martinez', exp: 19, department: 'HISTORY' },
    { name: 'Sophia Anderson', exp: 22, department: 'AI & ML' },
    { name: 'Matthew Taylor', exp: 20, department: 'COMPUTER SCIENCE' },
    { name: 'Emma Garcia', exp: 21, department: 'COMPUTER SCIENCE' }
  ];

}
