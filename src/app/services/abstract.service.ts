import {Headers, RequestOptions} from '@angular/http';
export class AbstractService {
  PROTOCOL = 'http://';
  HOST = 'localhost';
  PORT = '8081';
  CONTEXT = '/accounting';
  BASEURL = this.PROTOCOL + this.HOST + ':' + this. PORT + this.CONTEXT;
  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({headers: this.headers});

  constructor() {}
}
