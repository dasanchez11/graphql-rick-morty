import { Args, Query, Resolver } from "type-graphql";
import { CharactersQueryArgsDTO } from "../Dto";
import { Character } from "../schema/character.schema";
import { LogExecutionTime, RedisCache } from "../../shared";
import { CharacterService } from "../services";
import { Inject, Service } from "typedi";
@Service()
@Resolver(() => Character)
export class CharacterResolver {
  constructor(
    @Inject()
    private characterService: CharacterService
  ) {}

  @LogExecutionTime
  @RedisCache()
  @Query(() => [Character])
  async characters(@Args() filters: CharactersQueryArgsDTO) {
    return this.characterService.queryAll(filters);
  }
}
