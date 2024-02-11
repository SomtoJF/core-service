import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { updateUserArgsDto, userIdDto } from './dto';
import * as argon from 'argon2';

@Resolver('User')
export class UsersResolver {
  constructor(private prisma: PrismaService) {}

  @Query()
  async user(@Args() { id }: userIdDto) {
    const response = await this.prisma.user.findUnique({ where: { id: id } });
    delete response.hash;
    return response;
  }

  @Mutation()
  async updateUser(
    @Args() { id }: userIdDto,
    @Args('args') args: updateUserArgsDto,
  ) {
    // if password, hash it
    if (args.password) {
      const password = args.password;
      const hash = await argon.hash(password);
      args = { ...args, hash };
      delete args.password;
    }

    return this.prisma.user.update({ where: { id: id }, data: { ...args } });
  }

  @Mutation()
  async deleteUser(@Args() { id }: userIdDto) {
    return this.prisma.user.delete({ where: { id: id } });
  }
}
