import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/auth.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @Post('login')
  //@UseGuards(LocalGuard)
  async login(@Body() dto: SignInDto) {
    return await this.authService.signIn(dto);
  }

  @Post('register')
  async register(@Body() dto: SignInDto) {
    return await this.userService.createUser(dto);
  }
}
