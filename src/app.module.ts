import { join } from 'path';
import { Sequelize } from 'sequelize-typescript';
import { Module } from '@nestjs/common';
import { AuthenticationController } from './contollers/authentication.controller';
import { ConfigService } from './services/ConfigService';
import FileService from './services/FileService';
import { JsonFileConfigMergeService } from './services/JsonFileConfigMergeService';
import { Resources } from './constant/Resources';
import { UserRepository } from './repositories/UserRepository';
import { UserModel } from './repositories/models/UserModel';
import { UserService } from './services/UserService';
import { UtilService } from './services/UtilService';
import { SecurityService } from './services/SecurityService';
import { AuthenticationService } from './services/AuthenticationService';
import { RoleModel } from './repositories/models/RoleModel';
import { UserGroupModel } from './repositories/models/UserGroupModel';

@Module({
  imports: [],
  controllers: [AuthenticationController],
  providers: [
    // services
    {
      provide: ConfigService,
      inject: [JsonFileConfigMergeService],
      useFactory: async (
        jsonConfigMergeService: JsonFileConfigMergeService,
      ) => {
        const pwd = process.cwd();
        const files = [
          join(pwd, Resources.path.config, 'default.json'),
          join(
            pwd,
            Resources.path.config,
            `${process.env.NODE_ENV || 'dev'}.json`,
          ),
        ];
        const config = await jsonConfigMergeService.merge(files);
        const configService: any = new ConfigService(config);
        return configService;
      },
    },
    FileService,
    JsonFileConfigMergeService,
    UtilService,
    UserService,
    SecurityService,
    AuthenticationService,

    // repositories
    {
      provide: Resources.database,
      useFactory: async (config: ConfigService) => {
        const dbConfig = config.getConnectionString();
        const db = new Sequelize(dbConfig);
        db.addModels([UserModel, RoleModel, UserGroupModel]);
        await db.sync();
        return db;
      },
      inject: [ConfigService],
    },
    UserRepository,
  ],
})
export class AppModule {}
