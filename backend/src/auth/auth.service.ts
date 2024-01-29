import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(authPayload: AuthPayloadDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: authPayload.email,
      },
    });

    if (!user) {
      return null;
    }

    if (authPayload.password === user.password) {
      const payload = {
        sub: user.id,
        email: user.email,
        isActive: user.isActive,
      };

      return this.jwtService.sign(payload);
    }
  }
}
