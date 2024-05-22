import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class CharactersQueryArgsDTO {
  @Field({ nullable: true })
  status?: string;
  @Field({ nullable: true })
  species?: string;
  @Field({ nullable: true })
  gender?: string;
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  origin?: string;
}
