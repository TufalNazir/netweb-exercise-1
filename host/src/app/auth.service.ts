import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated: Observable<boolean>;

  constructor(private router: Router) {
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
    this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
  }

  // Check if the user is authenticated
  private hasToken(): boolean {
    const token = localStorage.getItem('role');
    return !!token; // Return true if token exists, false otherwise
  }

  // Login method
  login(username: string, password: string): Observable<boolean> {
    // Perform authentication logic, e.g., make HTTP request to authenticate user
    // For demonstration purposes, we'll simulate a successful login
    if (username === 'admin@netweb.com' && password === 'secret') {
      // Set authentication token in local storage
      localStorage.setItem('role', 'admin');
      this.isAuthenticatedSubject.next(true); // Update authentication state
      return new Observable<boolean>(observer => observer.next(true));
    } else if (username === 'user@netweb.com' && password === 'secret') {
      localStorage.setItem('role', 'user');
      this.isAuthenticatedSubject.next(true); // Update authentication state
      return new Observable<boolean>(observer => observer.next(true));
    } else {
      return new Observable<boolean>(observer => observer.next(false));
    }
  }

  get isUserLoggedIn() {
    if (localStorage.getItem('role')) {
      return { loggedIn: true, role: localStorage.getItem('role') };
    }
    return { loggedIn: false, role: '' };
  }

  // Logout method
  logout(): void {
    // Clear authentication token from local storage
    localStorage.removeItem('role');
    this.isAuthenticatedSubject.next(false); // Update authentication state
    // Redirect to login page or any other desired route
    this.router.navigate(['/login']);
  }
}
