import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolvers';
import { PrismaService } from '../../prisma/prisma.service';

@Module({ providers: [UsersResolver, PrismaService] })
export class UsersModule {}
