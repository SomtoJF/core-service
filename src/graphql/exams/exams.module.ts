import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExamsResolver } from './exams.resolvers';

@Module({ providers: [PrismaService, ExamsResolver] })
export class ExamsModule {}
