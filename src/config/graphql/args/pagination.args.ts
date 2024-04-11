import { ArgsType, Field, Int } from '@nestjs/graphql';
import { PAGES_PARAMS } from '../constants/pages';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, {
    nullable: true,
    defaultValue: PAGES_PARAMS.DEFAULT_PAGE_SIZE,
  })
  page?: number = PAGES_PARAMS.DEFAULT_PAGE_SIZE;

  @Field(() => Int, {
    nullable: true,
    defaultValue: PAGES_PARAMS.DEFAULT_PAGE_SIZE,
  })
  size?: number = PAGES_PARAMS.DEFAULT_PAGE_SIZE;
}
