import { Args, Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import { CharacterService } from "../services";
import { CharacterSchema, CharactersQueryArgsDTO } from "..";
import { LogExecutionTime, RedisCache } from "../../shared";
@Service()
@Resolver(() => CharacterSchema)
export class CharacterResolver {
  constructor(
    @Inject()
    private characterService: CharacterService
  ) {}

  @LogExecutionTime
  @RedisCache()
  @Query(() => [CharacterSchema])
  async characters(@Args() filters: CharactersQueryArgsDTO) {
    return this.characterService.queryAll(filters);
  }
}
