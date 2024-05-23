import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class CharacterSchema {
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
