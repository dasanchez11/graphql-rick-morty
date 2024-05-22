import { Args, Query, Resolver } from "type-graphql";
import { Character as CharacterService } from "../../database/models/character";
import { CharactersQueryArgsDTO } from "../Dto";
import { Character } from "../schema/character.schema";
import { LogExecutionTime, RedisCache } from "../../shared";

@Resolver(() => Character)
export class CharacterResolver {
  @LogExecutionTime
  @RedisCache()
  @Query(() => [Character])
  async characters(
    @Args() filters: CharactersQueryArgsDTO
  ): Promise<CharacterService[]> {
    const searchArgs = Object.keys(filters).reduce((searchArgs, key) => {
      const argument = filters[key as keyof typeof filters];
      if (argument !== undefined) {
        return { ...searchArgs, [key]: argument };
      } else {
        return { ...searchArgs };
      }
    }, {});
    return await CharacterService.findAll({ where: { ...searchArgs } });
  }
}
