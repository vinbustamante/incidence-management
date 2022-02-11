import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { DatabaseEnum } from 'src/enum/DatabaseEnum';
import { RoleModel } from './RoleModel';
import { UserModel } from './UserModel';

@Table({ tableName: DatabaseEnum.Tables.UserGroup.name })
export class UserGroupModel extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => UserModel)
  @Column
  userId: number;

  @ForeignKey(() => RoleModel)
  @Column
  roleId: number;

  @BelongsTo(() => UserModel)
  user: UserModel;

  @BelongsTo(() => RoleModel)
  role: RoleModel;
}
