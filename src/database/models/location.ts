import {
  Column,
  CreatedAt,
  DataType,
  Table,
  UpdatedAt,
  Model,
  HasOne,
  HasMany,
} from "sequelize-typescript";

import { Character } from "./character";

@Table({
  timestamps: true,
  tableName: "locations",
  modelName: "Location",
  createdAt: true,
  updatedAt: true,
})
export class Location extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  type: string;

  @Column({
    type: DataType.STRING,
  })
  dimension: string;

  @Column({
    type: DataType.STRING,
  })
  url: string;

  @HasMany(() => Character)
  residents: Character[];
}
