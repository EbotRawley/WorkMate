import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login(email: string, password: string): boolean {
    // Implement your login logic here
    // Return true if login is successful, false otherwise
    return true;
  }

  signup(name: string, email: string, password: string): boolean {
    // Implement your signup logic here
    // Return true if signup is successful, false otherwise
    return true;
  }

  logout(): void {
    // Implement your logout logic here
  }

  isLoggedIn(): boolean {
    // Implement logic to check if the user is logged in
    return false;
  }
  
}
