import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    private loggedIn = false;

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    setLoggedIn(value: boolean) {
        this.loggedIn = value;
    }
}