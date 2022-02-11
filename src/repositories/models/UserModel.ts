import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Resources } from 'src/constant/Resources';
import { UserGroupModel } from './UserGroupModel';

@Table({ tableName: Resources.Tables.User.name })
export class UserModel extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column
  username: string;

  @Column
  password: string;

  @HasMany(() => UserGroupModel)
  groups: UserGroupModel[];
}
