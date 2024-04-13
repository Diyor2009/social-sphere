import { ModelDefinition, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../entities/user.entity';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import bcrypt from 'bcrypt';
import { Schema } from 'mongoose';

const userSchema: Schema = SchemaFactory.createForClass(User);

userSchema.plugin(mongoosePaginate);

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password as string, 10);
});

export const UserModel: ModelDefinition = {
  name: User.name,
  schema: userSchema,
};
