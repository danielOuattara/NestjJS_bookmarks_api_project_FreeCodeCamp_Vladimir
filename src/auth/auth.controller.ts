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
  signin() {
    return "I'am sign in";
  }

  @Post('signup')
  signup() {
    return "I'am signing up";
  }
}
