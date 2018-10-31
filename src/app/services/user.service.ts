import { Injectable } from '@angular/core';

import { UserData } from '../subscriptions.model';

@Injectable()

export class UserService {
    currentUser: UserData;

    constructor() {}
    getCurrentUser() {
    
        return this.currentUser;
    }
    setCurrentUser(userData: UserData) {
        this.currentUser = Object.assign({}, userData);
    }
}