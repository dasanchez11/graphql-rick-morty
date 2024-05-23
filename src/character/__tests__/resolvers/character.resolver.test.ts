import { describe, expect, jest, it, beforeEach } from "@jest/globals";
import { CharacterResolver } from "../../resolvers/character.resolver";
import { CharacterSchema, CharactersQueryArgsDTO } from "../..";
import { CharacterService } from "../../services";

const mockResult: CharacterSchema[] = [
  { id: 1, name: "test character" } as unknown as CharacterSchema,
];

jest.mock("../../services", () => ({
  CharacterService: jest
    .fn()
    .mockImplementation(function (this: CharacterService) {
      this.queryAll = () => mockResult as any;
    }),
}));

jest.mock("type-graphql", () => ({
  Query: () => jest.fn(),
  Resolver: () => jest.fn(),
  Args: () => jest.fn(),
}));

jest.mock("typedi", () => ({
  Inject: () => jest.fn(),
  Service: () => jest.fn(),
}));

jest.mock("../..", () => ({
  CharactersQueryArgsDTO: jest.fn().mockImplementation(() => {
    return {
      status: "status",
      species: "species",
      gender: "gender",
      name: "name",
      origin: "origin",
    };
  }),
  CharacterSchema: jest.fn().mockImplementation(() => {
    return {
      status: "status",
      species: "species",
      gender: "gender",
      name: "name",
      origin: "origin",
    };
  }),
}));

jest.mock("../../../shared", () => ({
  LogExecutionTime: jest.fn(),
  RedisCache: () => jest.fn(),
}));

describe("character resolver", () => {
  const mockCharacterService =
    new CharacterService() as jest.Mocked<CharacterService>;
  it("query characters", async () => {
    const characterResolver = new CharacterResolver(mockCharacterService);
    const filters: CharactersQueryArgsDTO = { name: "test" };
    const resolverResult = await characterResolver.characters(filters);
    expect(resolverResult).toEqual(mockResult);
  });
});
