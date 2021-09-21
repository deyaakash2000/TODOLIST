
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {


  constructor(private http: HttpClient,
    private auth: AuthService) { }

  getcity() {
    return this.http.get('http://localhost/php-apis-prctice/apis/get-cities.php')
  }
  register(payload: any) {
    return this.http.post('http://localhost/php-apis-prctice/apis/register.php', payload)
  }
  login(payload: any) {
    return this.http.post('http://localhost/php-apis-prctice/apis/login.php', payload)
  }
  adddetails(payload: any) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())

    }
    return this.http.post('http://localhost/php-apis-prctice/apis/add.php', payload, header)
  }
  getActivites(payload:any) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())

    }
    return this.http.post('http://localhost/php-apis-prctice/apis/alldetails.php', payload, header)
  }
  update(payload:any) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())

    }
    return this.http.post('http://localhost/php-apis-prctice/apis/update.php', payload, header)
  }
  delete(payload:any) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearar ' + this.auth.gettoken())

    }
    return this.http.post('http://localhost/php-apis-prctice/apis/delete.php', payload, header)
  }
}

