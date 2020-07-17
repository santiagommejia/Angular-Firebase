import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

    public async signUp(email: string, password: string): Promise<string> {
        const response = await firebase.functions().httpsCallable('USER_signUp')({ email, password });
        return response.data;
    }

    public async login(email: string, password: string): Promise<string> {
        const authUser = await firebase.auth().signInWithEmailAndPassword(email, password);
        return authUser.user.uid;
    }

}