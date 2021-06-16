import { BaseModel } from "ale-base-model";
import { RoleWithPermission } from "./Role";

export interface Account extends BaseModel {
  username: string;
  password: string;
  loginType: LoginType;
}

export interface AccountWithRole extends Account {
  roleIds?: string[];
  roles?: RoleWithPermission[];
}

export enum LoginType {
  username,
  gmail,
  facebook,
}
