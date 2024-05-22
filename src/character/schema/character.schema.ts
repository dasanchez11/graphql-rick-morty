import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Character {
  @Field()
  name!: string;
  @Field()
  status!: string;
  @Field()
  species!: string;
  @Field()
  gender!: string;
  @Field()
  origin!: string;
}
