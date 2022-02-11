import { Controller, Get, Inject } from '@nestjs/common';
import { IUserService } from 'src/services/interface/IUserService';
import { UserService } from 'src/services/UserService';

@Controller('authentication')
export class AuthenticationController {
  @Inject(UserService)
  private readonly _userService: IUserService;

  @Get()
  getHello(): any {
    console.log('pass 1');
    return this._userService.getByUsername('user me');
  }
}
