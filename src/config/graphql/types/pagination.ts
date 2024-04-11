import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pagination {
  @Field(() => Int, { nullable: true })
  totalDocs?: number;

  @Field(() => Int, { nullable: true })
  limit?: number;

  @Field(() => Int, { nullable: true })
  totalPages?: number;

  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  pagingCounter?: number;

  @Field({ nullable: true })
  hasPrevPage?: boolean;

  @Field({ nullable: true })
  hasNextPage?: boolean;

  @Field(() => Int, { nullable: true })
  prevPage?: number;

  @Field(() => Int, { nullable: true })
  nextPage?: number;
}
