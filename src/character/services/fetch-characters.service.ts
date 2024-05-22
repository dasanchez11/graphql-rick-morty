import axios, { AxiosResponse } from "axios";
import { FetchedCharacters } from "../interfaces/fetch-character.interface";

export const getFetchCharacters = (
  page: 1
): Promise<AxiosResponse<FetchedCharacters>> => {
  return axios.get<FetchedCharacters>(
    "https://rickandmortyapi.com/api/character"
  );
};
