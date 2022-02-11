import { UserModel } from '../models/UserModel';

export interface IUserRepository {
  getByUsername(username: string): Promise<UserModel | null>;
}
