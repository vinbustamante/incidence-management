import { Injectable } from '@nestjs/common';
import { DatabaseEnum } from 'src/enum/DatabaseEnum';
import { IUserRepository } from './interface/IUserRepository';
import { UserModel } from './models/UserModel';
import { RepositoryBase } from './RepositoryBase';

@Injectable()
export class UserRepository extends RepositoryBase implements IUserRepository {
  async getByUsername(username: string): Promise<any> {
    const data = await UserModel.findOne({
      where: {
        [DatabaseEnum.Tables.User.Fields.Username]: username,
      },
    });
    return this._createModelData<UserModel>(data);
  }
}
