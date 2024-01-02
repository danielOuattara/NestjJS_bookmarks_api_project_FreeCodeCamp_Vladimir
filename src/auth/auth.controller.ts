import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    this.authService.test();
    console.log('In constructor');
  }

  @Post('/')
  help() {
    return this.authService.test();
  }

  @Post('signin')
  /* 
  - handles "signin" request, 
  - does other logic 
  - return service related business logic 
  */
  signin() {
    console.log('In signin controller handler');
    return this.authService.signin();
  }

  @Post('signup')
  signup() {
    /* 
  - handles "signup" request, 
  - does other logic 
  - return service related business logic 
  */
    return this.authService.signup();
  }
}
