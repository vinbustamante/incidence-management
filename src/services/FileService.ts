import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { ErrorMessages } from 'src/constant/ErrorMessages';
import { IFileService } from './interface/IFileService';

@Injectable()
export default class FileService implements IFileService {
  read(file: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, content) => {
        if (err) {
          reject(new Error(ErrorMessages.ConfigFileNotFound));
        } else {
          resolve(content.toString());
        }
      });
    });
  }
}
