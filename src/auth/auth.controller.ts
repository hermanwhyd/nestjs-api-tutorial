import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('signup')
  signup() {
    return 'iam signup';
  }

  @Post('signin')
  signin() {
    return 'iam signin';
  }
}