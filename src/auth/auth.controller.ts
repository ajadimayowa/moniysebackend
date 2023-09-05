import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { };
    @Post('login')
    logInUser(){
       return this.authService.logUserIn();
    }
    

    @Post('signup')
    signUserUp() {
        return this.authService.signUserUp();
    }
}