import { Injectable } from "@nestjs/common";

@Injectable({

})
export class AuthService {
logUserIn() {
        return { username: 'ade', pass: 'kemi' }
    }

    signUserUp() {
        return { age: 20, name: 'ade' }
    }
}