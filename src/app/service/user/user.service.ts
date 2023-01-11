import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  login(user_id: string, user_password: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('user_id', user_id);
    body = body.set('user_password', user_password);

    return this.http.post(
      'https://ubaya.fun/hybrid/160419007/products_api/loginProduct.php',
      body
    );
  }
}
