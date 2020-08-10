import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserDataService {
    private username: string;

    constructor() {
    }

    login(username: string): string {
        this.username = username;
        return username;
    }

    logout(): void {
        this.username = null;
    }


    getUsername(): string {
        return this.username;
    }

    isLoggedIn(): boolean {
        return this.username !== null;
    }
}
