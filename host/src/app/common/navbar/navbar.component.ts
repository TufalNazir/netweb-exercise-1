import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
}


@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, MenuModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  userRole: string = '';

  constructor(private authService: AuthService, public router: Router) {
    this.userRole = this.authService.isUserLoggedIn.role as any;
  }

  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe((x) => {
      this.handleOnMenuOptionsOnRole(this.authService.isUserLoggedIn.role as string);
    });
  }

  menu: MenuItem[] = [];

  handleOnMenuOptionsOnRole(role: string) {
    console.log('Role : ', role);
    if (role === 'admin') {
      this.menu = [{ label: 'Student', routerLink: '/student' },
        { label: 'Teacher', routerLink: '/teacher' }];
    } else if (role === 'user') {
      this.menu = [{ label: 'Student', routerLink: '/student' }];
    }
  }

  onClickOfLogout() {
    this.authService.logout();
  }
}
