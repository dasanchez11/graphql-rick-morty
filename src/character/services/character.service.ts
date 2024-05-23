import "reflect-metadata";

import { Service } from "typedi";
import { Character } from "../../database/models/character";
import { CharactersQueryArgsDTO } from "..";

@Service()
export class CharacterService {
  async queryAll(filters: CharactersQueryArgsDTO): Promise<Character[]> {
    const searchArgs = Object.keys(filters).reduce((searchArgs, key) => {
      const argument = filters[key as keyof typeof filters];
      if (argument !== undefined) {
        return { ...searchArgs, [key]: argument };
      } else {
        return { ...searchArgs };
      }
    }, {});
    return Character.findAll({ where: { ...searchArgs } });
  }
}
