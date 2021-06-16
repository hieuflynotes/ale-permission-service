import { BaseModel } from "ale-base-model";

export interface UrlResource extends BaseModel {
  method: Method;
  url: string;
}

export enum Method {
  GET,
  POST,
  PUSH,
  DELETE,
  PATCH,
}
