import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin() {
    return 'You are in signin';
  }
  signup() {
    return 'You are in signup';
  }
}
