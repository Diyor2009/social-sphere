import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { ObjectIdScalar } from 'src/config/graphql/scalars/objectId.scalar';

@Schema()
@ObjectType()
export class User {
  @Field(() => ObjectIdScalar, { nullable: true })
  _id?: Types.ObjectId;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  password: string;
}
