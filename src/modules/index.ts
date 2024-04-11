import { Module, Type } from '@nestjs/common';

const modules: Type<any>[] = [];

@Module({
  imports: [...modules],
  exports: [...modules],
})
export class Modules {}
