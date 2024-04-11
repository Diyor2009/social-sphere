import { Module, Type } from '@nestjs/common';
import { Configs } from './config';
import { Modules } from './modules';

const appModules: Type<any>[] = [Configs, Modules];

@Module({
  imports: [...appModules],
})
export class AppModule {}
