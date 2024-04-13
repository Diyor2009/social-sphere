import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../entities/user.entity';
import { PaginateModel } from 'mongoose';
import { GetUserByIdArgs } from '../args/getUserById.args';
import ERRORS from 'src/constants/errors';
import { UserOutput } from '../outputs/user.output';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: PaginateModel<User>,
  ) {}

  async getUserById({ _id }: GetUserByIdArgs): Promise<UserOutput> {
    const foundUser = await this.userModel.findById(_id);

    if (!foundUser) throw new NotFoundException('User' + ERRORS.NOT_FOUND);

    return { payload: foundUser };
  }
}
