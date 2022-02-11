import { Injectable } from '@nestjs/common';
import { IUserRepository } from './interface/IUserRepository';
import { UserModel } from './models/UserModel';
import { RepositoryBase } from './RepositoryBase';

@Injectable()
export class UserRepository extends RepositoryBase implements IUserRepository {
  async getByUsername(username: string): Promise<any> {
    const data = await UserModel.findOne({
      where: {
        username: username,
      },
    });
    return this._createModelData<UserModel>(data);
  }
}
