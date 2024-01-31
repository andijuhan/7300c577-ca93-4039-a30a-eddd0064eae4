import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/users.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, UsersService, JwtService],
})
export class AuthModule {}
