import {
  CountProps,
  FindProps,
  IBaseService,
  ListProps,
  Paging,
} from "ale-base-model";
import { Collection, Db } from "mongodb";

export class MongoAdapter<T> implements IBaseService<T> {
  db: Db;
  collection: Collection<T>;

  constructor(db: Db, collectionName: string) {
    this.db = db;
    this.collection = this.db.collection(collectionName);
  }

  find(params?: FindProps<T>): Promise<T[]> {
    return this.collection.find().toArray();
  }

  list(params?: ListProps<T>): Promise<Paging<T>> {
    throw new Error("Method not implemented.");
  }
  get(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
  update(t: Partial<T>): Promise<T> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
  create(t: Partial<T>): Promise<T> {
    throw new Error("Method not implemented.");
  }
  count(params: CountProps<T>): Promise<number> {
    throw new Error("Method not implemented.");
  }
}
