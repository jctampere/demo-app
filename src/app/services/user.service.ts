import { Injectable } from '@angular/core';
import { UserData } from '../subscriptions.model';

@Injectable()

export class UserService {

    constructor() {}
    getCurrentUser() {
        let currentUser = localStorage.getItem('currentUser');

        return currentUser ? JSON.parse(localStorage.getItem('currentUser')) : null;
    }
    setCurrentUser(userData: UserData) {
        localStorage.setItem('currentUser', JSON.stringify(userData));
    }
    removeUser() {
        localStorage.removeItem('currentUser');
    }
}