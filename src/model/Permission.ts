import { BaseModel } from "ale-base-model";
import { UrlResource } from "./UrlResource";

export interface Permission extends BaseModel {
  name: string;
  description: string;
}

export interface PermissionWithUrlResource extends Permission {
  urlResourceIds?: string;
  urlResources?: UrlResource[];
}
