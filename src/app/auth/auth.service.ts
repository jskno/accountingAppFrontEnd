import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {

  }

  signinUser(email: string, password: string) {

  }

  getToken() {

  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    this.token = null;
    this.router.navigate(['/signin']);
  }
}
