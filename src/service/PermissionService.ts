import { IBaseService } from "ale-base-model";
import { Db } from "mongodb";
import { Permission } from "../model/Permission";
import { BaseMongoService } from "./BaseMongoService";

export interface IPermissionService extends IBaseService<Permission> {}

export class PermissionService
  extends BaseMongoService<Permission>
  implements IPermissionService
{
  constructor(db: Db, modelName: string) {
    super(db, modelName);
  }
}
