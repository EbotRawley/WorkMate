import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLogin(): void {
    if (this.authService.login(this.email, this.password)) {
      // Redirect to dashboard on successful login
    } else {
      // Show error message
    }
  }
}
