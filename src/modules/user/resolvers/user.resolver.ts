import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { UserOutput } from '../outputs/user.output';
import { GetUserByIdArgs } from '../args/getUserById.args';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserOutput)
  @UseGuards(AuthGuard)
  getUserById(@Args() args: GetUserByIdArgs): Promise<UserOutput> {
    return this.userService.getUserById(args);
  }
}
