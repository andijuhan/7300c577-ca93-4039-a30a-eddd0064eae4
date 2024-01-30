import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async signIn(dto: SignInDto) {
    const user = await this.validateUser(dto);

    const payload = {
      sub: user.id,
      email: user.email,
      isActive: user.isActive,
    };

    return {
      user,
      backendToken: {
        accessToken: await this.jwtService.signAsync(payload, {
          expiresIn: '1d',
          secret: process.env.JWT_SECRET_KEY,
        }),
        refreshToken: await this.jwtService.signAsync(payload, {
          expiresIn: '7d',
          secret: process.env.JWT_REFRESH_TOKEN,
        }),
      },
    };
  }

  async validateUser(dto: SignInDto) {
    const user = await this.userService.findByEmail(dto.email);

    if (user && (await compare(dto.password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      return result;
    }

    throw new UnauthorizedException('Invalid email or password');
  }
}
