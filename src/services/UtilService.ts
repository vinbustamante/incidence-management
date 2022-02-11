import { plainToClass } from 'class-transformer';
import { Injectable } from '@nestjs/common';
import { IUtilService } from './interface/IUtilService';

@Injectable()
export class UtilService implements IUtilService {
  toType(dtoClass: any, sourceData: any): any {
    return plainToClass(dtoClass as any, sourceData) as any;
  }
}
