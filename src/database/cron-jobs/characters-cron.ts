import cron from "node-cron";
import { getFetchCharacters } from "../../character";
import { Character as CharacterService } from "../models/character";

export const runCharactersCronJob = () => {
  cron.schedule("0 */12 * * *", async () => {
    const { data } = await getFetchCharacters(1);
    const charactersResultsPromise = data.results
      .slice(0, 15)
      .map((character) => {
        const { status, species, gender, name, origin } = character;
        const updateData: Partial<CharacterService> = {
          status: status as any,
          species,
          gender,
          name,
          origin: origin.name,
        };
        return CharacterService.update(updateData, {
          where: {
            id: character.id,
          },
        });
      });
    await Promise.all(charactersResultsPromise);
    console.log("updated");
  });
};
