import { Model } from 'sequelize-typescript';

export abstract class RepositoryBase {
  protected _createModelData<TModelClass extends Model>(
    model: TModelClass | null | undefined,
  ): TModelClass {
    if (model) {
      return model.toJSON<TModelClass>();
    } else {
      return null;
    }
  }
}
