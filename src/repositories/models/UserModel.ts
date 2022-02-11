import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class UserModel extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column
  username: string;

  @Column
  password: string;
}
