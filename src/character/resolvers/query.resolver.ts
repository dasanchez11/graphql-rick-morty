import { Arg, Args, Query, Resolver } from "type-graphql";
import { Character as CharacterDB } from "../../database/models/character";
import { LogExecutionTime } from "../../shared/decorators/excecution.decorator";
import { CharactersQueryArgsDTO } from "../models";
import { Character } from "../schema/character.schema";

@Resolver(() => Character)
export class CharacterResolver {
  @LogExecutionTime
  @Query(() => [Character])
  async characters(
    @Args() filters: CharactersQueryArgsDTO
  ): Promise<CharacterDB[]> {
    console.log({ filters });
    const searchArgs = Object.keys(filters).reduce((searchArgs, key) => {
      const argument = filters[key as keyof typeof filters];
      if (argument !== undefined) {
        return { ...searchArgs, [key]: argument };
      } else {
        return { ...searchArgs };
      }
    }, {});
    return await CharacterDB.findAll({ where: { ...searchArgs } });
  }
}
