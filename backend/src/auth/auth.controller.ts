import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/auth.dto';
import { UsersService } from 'src/user/users.service';
import { RefreshGuard } from './guards/refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @Post('login')
  async login(@Body() dto: SignInDto) {
    return await this.authService.signIn(dto);
  }

  @UseGuards(RefreshGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    return await this.authService.refreshToken(req.user);
  }

  @Post('register')
  async register(@Body() dto: SignInDto) {
    return await this.userService.createUser(dto);
  }
}
