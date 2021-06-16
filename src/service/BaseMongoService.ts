import { Db } from "mongodb";
import { MongoAdapter } from "../adapter/MongoAdapter";
import { BaseService } from "./BaseService";

export class BaseMongoService<T> extends BaseService<T> {
  constructor(db: Db, collectionName: string) {
    let adapter = new MongoAdapter<T>(db, collectionName);
    super(adapter);
  }
}
