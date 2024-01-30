import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findById(id: number) {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async createUser(createUserDto: CreateUserDto) {
    //check if email already exists
    const user = await this.findByEmail(createUserDto.email);

    if (user) {
      throw new ConflictException('Email already use');
    }

    const newUser = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: await hash(createUserDto.password, 10),
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = newUser;
    return result;
  }
}
