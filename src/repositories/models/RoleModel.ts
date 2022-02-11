import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Resources } from 'src/constant/Resources';
import { UserGroupModel } from './UserGroupModel';

@Table({ tableName: Resources.Tables.Role.name })
export class RoleModel extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column
  name: string;

  @HasMany(() => UserGroupModel)
  userGroups: UserGroupModel[];
}
