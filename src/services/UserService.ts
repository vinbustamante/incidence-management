import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/repositories/interface/IUserRepository';
import { UserRepository } from 'src/repositories/UserRepository';
import { BaseService } from './BaseService';
import { UserDto } from './dto/UserDto';
import { IUserService } from './interface/IUserService';

@Injectable()
export class UserService extends BaseService implements IUserService {
  @Inject(UserRepository)
  private readonly _userRepository: IUserRepository;

  async getByUsername(username: string): Promise<UserDto> {
    const userData = await this._userRepository.getByUsername(username);
    return this._createDto(UserDto, userData);
  }
}
