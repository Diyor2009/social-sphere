import { Module, Type } from '@nestjs/common';
import { UserModule } from './user/user.module';

const modules: Type<any>[] = [UserModule];

@Module({
  imports: [...modules],
  exports: [...modules],
})
export class Modules {}
