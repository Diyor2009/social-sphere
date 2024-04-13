import { ArgsType, Field } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { ObjectIdScalar } from 'src/config/graphql/scalars/objectId.scalar';

@ArgsType()
export class GetUserByIdArgs {
  @Field(() => ObjectIdScalar)
  _id: Types.ObjectId;
}
