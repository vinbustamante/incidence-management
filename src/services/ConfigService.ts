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
}
