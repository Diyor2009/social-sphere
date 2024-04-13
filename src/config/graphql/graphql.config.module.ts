import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ObjectIdScalar } from './scalars/objectId.scalar';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: () => ({
        path: '/',
        playground: true,
        autoSchemaFile: true,
      }),
    }),
  ],
  providers: [ObjectIdScalar],
})
export class GraphQLConfigModule {}
