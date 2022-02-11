import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { DatabaseEnum } from 'src/enum/DatabaseEnum';
import { UserGroupModel } from './UserGroupModel';

@Table({ tableName: DatabaseEnum.Tables.User.name })
export class RoleModel extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column
  name: string;

  @HasMany(() => UserGroupModel)
  userGroups: UserGroupModel[];
}
