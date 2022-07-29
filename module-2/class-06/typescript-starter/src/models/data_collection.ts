import { FindOptionsWhere, Repository } from 'typeorm';

export class Collection<
  E extends { id: number },
  R extends Repository<E> = Repository<E>
> {
  constructor(private repository: R, public modelName: string) {}

  async create(obj: E) {
    const record = this.repository.create(obj);
    const created = await this.repository.save(record);
    return created;
  }

  read(): Promise<E[]>;
  read(id: number): Promise<null | E>;
  async read(id?: number): Promise<null | E | E[]> {
    if (id !== undefined) {
      return await this.repository.findOneBy(this.where(id));
    } else {
      return await this.repository.find();
    }
  }

  async update(id: number, obj: E): Promise<E> {
    if (!id) throw new Error(`No ${this.modelName} id provided`);
    obj.id = id;
    return await this.repository.merge(obj);
  }

  async delete(id?: number): Promise<void> {
    if (!id) throw new Error('No record ID provided');

    const deleted = await this.repository.delete(id);
    if (!deleted.affected) {
      throw new Error(`Did not find ${id} to delete`);
    } else if (deleted.affected > 1) {
      throw new Error(`Deleted too many items! ${deleted.affected}`);
    }
  }

  private where(id: number): FindOptionsWhere<E> {
    return { id } as FindOptionsWhere<E>;
  }
}
