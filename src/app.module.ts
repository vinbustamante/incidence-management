import { join } from 'path';
import { Sequelize } from 'sequelize-typescript';
import { Module, ValidationPipe } from '@nestjs/common';
import { AuthenticationController } from './contollers/AuthenticationController';
import { ConfigService } from './services/ConfigService';
import FileService from './services/FileService';
import { JsonFileConfigMergeService } from './services/JsonFileConfigMergeService';
import { Resources } from './constant/Resources';
import { UserRepository } from './repositories/UserRepository';
import { UserService } from './services/UserService';
import { UtilService } from './services/UtilService';
import { SecurityService } from './services/SecurityService';
import { AuthenticationService } from './services/AuthenticationService';
import { APP_PIPE } from '@nestjs/core';

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
        const database = new Sequelize(dbConfig);
        const modelPath = join(process.cwd(), Resources.path.models, '*.js');
        database.addModels([modelPath]);
        await database.sync();
        return database;
      },
      inject: [ConfigService],
    },
    UserRepository,

    // enable validation
    {
      provide: APP_PIPE,
      useFactory: (): any => {
        return new ValidationPipe({
          disableErrorMessages: false,
        });
      },
    },
  ],
})
export class AppModule {}
