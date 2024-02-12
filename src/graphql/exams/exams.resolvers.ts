import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { createExamDto, examsIdDto } from './dto';
import { Exam } from '../graphql';

@Resolver('Exam')
export class ExamsResolver {
  constructor(private prisma: PrismaService) {}

  @Query()
  async exam(@Args() { id }: examsIdDto) {
    try {
      return await this.prisma.exam.findUnique({ where: { id: id } });
    } catch (err) {
      throw err;
    }
  }
  @ResolveField()
  async examiner(@Parent() exam: Exam) {
    try {
      return await this.prisma.user.findUnique({
        where: { id: exam.examinerId },
      });
    } catch (err) {
      throw err;
    }
  }

  @Mutation()
  async createExam(@Args('args') args: createExamDto) {
    return await this.prisma.exam.create({ data: args });
  }

  @Mutation()
  async deleteExam(@Args() { id }: examsIdDto) {
    try {
      return await this.prisma.exam.delete({ where: { id: id } });
    } catch (err) {
      throw err;
    }
  }
}
