import {
  Column,
  CreatedAt,
  DataType,
  Table,
  UpdatedAt,
  Model,
  HasOne,
} from "sequelize-typescript";

import { Location } from "./location";

@Table({
  timestamps: true,
  tableName: "characters",
  modelName: "Character",
  createdAt: true,
  updatedAt: true,
})
export class Character extends Model {
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
    type: DataType.ENUM("Alive", "Dead", "Unknown"),
  })
  status: string;

  @Column({
    type: DataType.STRING,
  })
  species: string;

  @HasOne(() => Location)
  location: Location;
}
