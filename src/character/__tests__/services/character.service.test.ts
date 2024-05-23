import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { CharacterService } from "../../services/character.service";
import { CharacterSchema, CharactersQueryArgsDTO } from "../..";

const mockCharacter: CharacterSchema = {
  name: "name",
  status: "status",
  species: "species",
  origin: "origin",
  gender: "gender",
};

jest.mock("../../../database/models/character", () => ({
  Character: {
    findAll: () => [mockCharacter],
  },
}));

jest.mock("../..", () => ({
  CharactersQueryArgsDTO: jest.fn().mockReturnValue({
    status: "status",
    species: "species",
    gender: "gender",
    name: "name",
    origin: "origin",
  }),
}));

describe("character service", () => {
  let filters: CharactersQueryArgsDTO = { name: "test" };
  it("should queryAll", async () => {
    const characterService = new CharacterService();
    const result = await characterService.queryAll(filters);
    expect(result).toEqual([mockCharacter]);
  });
});
