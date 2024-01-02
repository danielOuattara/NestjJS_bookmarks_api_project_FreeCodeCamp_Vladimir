import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  test() {
    console.log('AuthService Root');
  }

  signin() {
    return { msg: 'Sign in completed' };
  }

  signup() {
    return { msg: 'Sign up completed' };
  }
}
