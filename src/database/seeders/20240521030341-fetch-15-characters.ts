import { QueryInterface } from "sequelize";
import { getFetchCharacters } from "../../character/services/fetch-characters.service";
import { v4 as uuidv4 } from "uuid";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface: QueryInterface) {
    const { data } = await getFetchCharacters(1);
    const characters = data.results.slice(0, 15).map((result) => {
      const { id, status, species, gender, name, origin } = result;
      return {
        id,
        status,
        species,
        gender,
        name,
        origin: origin.name,
      };
    });

    return queryInterface.bulkInsert("Characters", characters);
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete("Characters", {}, {});
  },
};
