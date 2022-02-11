import { Inject, Injectable } from '@nestjs/common';
import { IUtilService } from './interface/IUtilService';
import { UtilService } from './UtilService';

@Injectable()
export abstract class BaseService {
  @Inject(UtilService)
  private readonly _utilService: IUtilService;

  protected _createDto(TModelDto: any, model: any | null | undefined): any {
    if (model) {
      return this._utilService.toType(TModelDto, model);
    } else {
      return null;
    }
  }
}
