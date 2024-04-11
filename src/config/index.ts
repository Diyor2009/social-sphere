import { Module, Type } from '@nestjs/common';
import { GraphQLConfigModule } from './graphql/graphql.config.module';
import { MongoDBConfigModule } from './mongodb/mongodb.config.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

const configModules: Type<any>[] = [GraphQLConfigModule, MongoDBConfigModule];

@Module({
  imports: [...configModules, ConfigModule.forRoot(), ThrottlerModule],
  exports: [...configModules],
})
export class Configs {}
