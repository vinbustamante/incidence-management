import { UserDto } from '../dto/UserDto';

export interface IUserService {
  getByUsername(username: string): Promise<UserDto>;
}
