import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/repositories/interface/IUserRepository';
import { UserRepository } from 'src/repositories/UserRepository';
import { UserDto } from './dto/UserDto';
import { IUserService } from './interface/IUserService';
import { IUtilService } from './interface/IUtilService';
import { UtilService } from './UtilService';

@Injectable()
export class UserService implements IUserService {
  @Inject(UserRepository)
  private readonly _userRepository: IUserRepository;

  @Inject(UtilService)
  private readonly _utilService: IUtilService;

  async getByUsername(username: string): Promise<UserDto> {
    const userData = await this._userRepository.getByUsername(username);
    return this._utilService.toType(UserDto, userData);
  }
}
