import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../host/src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.initializeLoginForm();
    if (this.authService.isUserLoggedIn.loggedIn) {
      if(this.authService.isUserLoggedIn.role === 'user') {
        this.router.navigate(['/student'])
      } else {
        this.router.navigate(['/teacher'])
      }
    }
  }

  initializeLoginForm() {
    this.loginForm = new FormGroup<any>({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onClickOfLogin() {
    if (!this.loginForm.valid) {
      alert('Please enter required fields**');
      return;
    }
    const values = this.loginForm.value;
    if (values.username === 'user@netweb.com' && values?.password === 'secret') {
      this.authService.login(values.username, values.password).subscribe((x) => {
        if (x) {
          this.router.navigate(['/student']);
        }
      });
    } else if (values.username === 'admin@netweb.com' && values?.password === 'secret') {
      this.authService.login(values.username, values.password);
      this.router.navigate(['/teacher']);
    } else {
      alert('Invalid username or password');
    }
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

}
