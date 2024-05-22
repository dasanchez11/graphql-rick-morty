import {
  InferAttributes,
  InferCreationAttributes,
  CreateOptions,
  CreationOptional,
  DataTypes,
  Sequelize,
  Model,
} from "sequelize";

import { v4 as uuidv4 } from "uuid";
import { CharacterStatus, CharacterGender } from "../../character";
import sequelizeConnection from "../connection";

export class Character extends Model<
  InferAttributes<Character>,
  InferCreationAttributes<Character>
> {
  declare id: string;
  declare name: string;
  declare status: CreateOptions<
    CharacterStatus.alive | CharacterStatus.dead | CharacterStatus.unknown
  >;
  declare species: string;
  declare origin: string;
  declare gender: string;
  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>;
}

Character.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuidv4(),
    },
    name: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM(
        CharacterStatus.alive,
        CharacterStatus.dead,
        CharacterStatus.unknown
      ),
    },
    species: {
      type: DataTypes.STRING,
    },
    origin: {
      type: DataTypes.STRING,
    },
    gender: DataTypes.ENUM(
      CharacterGender.male,
      CharacterGender.female,
      CharacterGender.unknown
    ),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize: sequelizeConnection,
    tableName: "Characters",
  }
);
