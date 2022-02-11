import { Inject, Injectable } from '@nestjs/common';
import FileService from './FileService';
import { IFileService } from './interface/IFileService';
import { IJsonFileConfigMergeService } from './interface/IJsonFileConfigMergeService';

@Injectable()
export class JsonFileConfigMergeService implements IJsonFileConfigMergeService {
  @Inject(FileService)
  private readonly _fileService: IFileService;

  async merge(files: string[]): Promise<object> {
    let mergeConfig: any = {};
    const contents = await this._readFiles(files);
    contents.forEach((content) => {
      const config = JSON.parse(content);
      mergeConfig = Object.assign(mergeConfig, config);
    });
    return mergeConfig;
  }

  private async _readFiles(files: string[]): Promise<string[]> {
    const buffer = [];
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      const content = await this._fileService.read(file);
      buffer.push(content);
    }
    return buffer;
  }
}
