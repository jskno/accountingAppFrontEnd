import {Headers, RequestOptions} from '@angular/http';
import {AuthService} from '../auth/auth.service';

export class AbstractService {
  PROTOCOL = 'http://';
  HOST = 'localhost';
  // HOST = '35.158.129.219';
  PORT = '8081';
  CONTEXT = '/accounting';
  BASEURL = this.PROTOCOL + this.HOST + ':' + this. PORT + this.CONTEXT;


  constructor(protected authService: AuthService) {}

  protected getOptions() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.getToken()
    });
    const options = new RequestOptions({headers: headers});
    return options;
  }
}
