import {
  CountProps,
  FindProps,
  IBaseService,
  ListProps,
  Paging,
} from "ale-base-model";

export class BaseService<T> implements IBaseService<T> {
  private adapter: IBaseService<T>;
  constructor(adapter: IBaseService<T>) {
    this.adapter = adapter;
  }
  find(params?: FindProps<T>): Promise<T[]> {
    return this.adapter.find(params);
  }
  list(params?: ListProps<T>): Promise<Paging<T>> {
    return this.adapter.list(params);
  }
  get(id: string): Promise<T> {
    return this.adapter.get(id);
  }
  update(t: Partial<T>): Promise<T> {
    return this.adapter.update(t);
  }
  delete(id: string): Promise<T> {
    return this.adapter.delete(id);
  }
  create(t: Partial<T>): Promise<T> {
    return this.adapter.create(t);
  }
  count(params: CountProps<T>): Promise<number> {
    return this.adapter.count(params);
  }
}
