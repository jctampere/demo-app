import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from './user.service';


@Injectable()

export class SubscriptionService {
    url = 'http://localhost:4000/subscriptions';

    constructor(private httpClient: HttpClient, private userService: UserService) {}
    getSubscriptions() {
        const headers = {
            authorization: `Bearer ${this.userService.getCurrentUser().token}`
        }
        return this.httpClient.get(this.url, {headers});
    }
}