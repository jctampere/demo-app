import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class LoginService {
    url = 'http://89439c57.ngrok.io/login';

    constructor(private httpClient: HttpClient) {}
    login(loginEmail: string, password: string) {
        return this.httpClient.post(this.url, { loginEmail, password });     
    }
}