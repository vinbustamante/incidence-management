import { Injectable } from '@nestjs/common';
import { IConfigService } from './interface/IConfigService';

@Injectable()
export class ConfigService implements IConfigService {
  private readonly _config: any;

  constructor(config: object) {
    this._config = config;
  }

  getConnectionString(): any {
    return this._config.database.connection;
  }

  getJwtSecretKey(): string {
    return this._config.security.jwt.secretKey;
  }

  getAccessTokenExpiration(): string {
    return this._config.security.jwt.accessToken.expiration;
  }
}
