import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ErrorMessages } from 'src/constant/ErrorMessages';
import { AuthenticationDto } from './dto/AuthenticationDto';
import { AuthenticationResponseDto } from './dto/AuthenticationResponseDto';
import { IAuthenticationService } from './interface/IAuthenticationService';
import { ISecurityService } from './interface/ISecurityService';
import { IUserService } from './interface/IUserService';
import { SecurityService } from './SecurityService';
import { UserService } from './UserService';

@Injectable()
export class AuthenticationService implements IAuthenticationService {
  @Inject(UserService)
  private readonly _userService: IUserService;

  @Inject(SecurityService)
  private readonly _securityService: ISecurityService;

  async authenticate(
    credential: AuthenticationDto,
  ): Promise<AuthenticationResponseDto> {
    const response = new AuthenticationResponseDto();
    const user = await this._userService.getByUsername(credential.username);
    if (user && user.password === credential.password) {
      response.accessToken = await this._securityService.createAccessToken(
        user,
      );
    } else {
      throw new HttpException(
        ErrorMessages.AuthenticationFailed,
        HttpStatus.UNAUTHORIZED,
      );
    }
    return response;
  }
}
