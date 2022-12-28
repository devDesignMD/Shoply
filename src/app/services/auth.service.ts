import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CredentialsInterface, LoginInterface} from "../ts/interfaces";
import {Observable} from "rxjs";
import {ApiRoutes} from "../ts/enum";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(payload: LoginInterface):Observable<CredentialsInterface>{
    return this.http.post<CredentialsInterface>(ApiRoutes.Login, payload)
  }
}
