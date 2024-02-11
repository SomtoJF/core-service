import { Args, Query, Resolver } from '@nestjs/graphql';
import { Public } from 'src/decorators/public';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver('User')
export class UsersResolver {
  constructor(private prisma: PrismaService) {}

  @Query()
  async user(@Args('id') id: string) {
    const response = await this.prisma.user.findUnique({ where: { id: id } });
    delete response.hash;
    return response;
  }
}
