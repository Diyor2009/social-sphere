import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';
import { UserModel } from './models/user.model';

@Module({
  imports: [MongooseModule.forFeature([UserModel])],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
