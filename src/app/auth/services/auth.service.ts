import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterPayload } from '../model/registerPayload';
import { map, Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from '../model/loginPayload';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:8080/api/auth';
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(`${this.url}/signup`, registerPayload);
  }

  login(loginRequest: LoginRequest): Observable<boolean> {
    return this.httpClient
      .post<LoginResponse>(`${this.url}/login`, loginRequest)
      .pipe(
        map((data) => {
          if (data) {
            this.localStorageService.store('loginResponse', data);
            return true;
          } else {
            return false;
          }
        })
      );
  }
}
