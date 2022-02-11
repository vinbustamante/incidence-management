import { Injectable } from '@nestjs/common';
import { IUserRepository } from './interface/IUserRepository';
import { UserModel } from './models/UserModel';

@Injectable()
export class UserRepository implements IUserRepository {
  async getByUsername(username: string): Promise<UserModel> {
    const data = await UserModel.findOne({
      where: {
        username: username,
      },
    });
    return data.toJSON<UserModel>();
  }
}
