import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AuthenticationService } from 'src/services/AuthenticationService';
import { IAuthenticationService } from 'src/services/interface/IAuthenticationService';
import { IUserService } from 'src/services/interface/IUserService';
import { UserService } from 'src/services/UserService';
import { UserAuthenticationValidation } from './viewModels/UserAuthenticationValidation';

@Controller('authentication')
export class AuthenticationController {
  @Inject(UserService)
  private readonly _userService: IUserService;

  @Inject(AuthenticationService)
  private readonly _authenticationService: IAuthenticationService;

  @Post('login')
  async login(@Body() credential: UserAuthenticationValidation) {
    return this._authenticationService.authenticate(credential);
  }
}
