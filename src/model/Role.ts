import { BaseModel } from "ale-base-model";
import { Permission, PermissionWithUrlResource } from "./Permission";

export interface Role extends BaseModel {
  name: string;
  description: string;
}

export interface RoleWithPermission extends Role {
  permissionIds?: string[];
  permissions?: PermissionWithUrlResource[];
}
