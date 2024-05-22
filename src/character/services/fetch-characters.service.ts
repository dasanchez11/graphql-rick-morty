import axios, { AxiosResponse } from "axios";
import { FetchedCharacters } from "../models/fetch-character.model";

export const getFetchCharacters = (
  page: 1
): Promise<AxiosResponse<FetchedCharacters>> => {
  return axios.get<FetchedCharacters>(
    "https://rickandmortyapi.com/api/character"
  );
};
