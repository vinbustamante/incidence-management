import { sign } from 'jsonwebtoken';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from './ConfigService';
import { ISecurityService } from './interface/ISecurityService';
import { IConfigService } from './interface/IConfigService';

@Injectable()
export class SecurityService implements ISecurityService {
  @Inject(ConfigService)
  private readonly _configService: IConfigService;

  createAccessToken(data: object): Promise<string> {
    const secretKey = this._configService.getJwtSecretKey();
    const expiration = this._configService.getAccessTokenExpiration();
    return sign(JSON.parse(JSON.stringify(data)), secretKey, {
      expiresIn: expiration,
    });
  }
}
