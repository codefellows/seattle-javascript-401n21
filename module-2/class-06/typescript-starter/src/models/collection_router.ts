import { Request, Response, Router } from 'express';
import { Collection } from './data_collection';

export class RouteCollection<E extends { id: number }> {
  readonly router = Router();
  constructor(private collection: Collection<E>) {
    this.router.get(`/`, (q, s) => this.get(q, s));
    this.router.get(`/:id`, (q, s) => this.get(q, s));
    this.router.post(`/`, (q, s) => this.post(q, s));
    this.router.put(`/:id`, (q, s) => this.put(q, s));
    this.router.delete(`/:id`, (q, s) => this.delete(q, s));
  }

  async get(req: Request, res: Response) {
    if (req.params.id) {
      const item = await this.collection.read(Number(req.params.id));
      if (item === null) {
        res
          .status(404)
          .send(`${this.collection.modelName} ${req.params.id} not found!`);
      } else {
        res.status(200).send(item);
      }
    } else {
      const items = await this.collection.read();
      res.status(200).send(items);
    }
  }

  async put(req: Request, res: Response) {
    const updated = await this.collection.update(
      Number(req.params.id ?? -1),
      req.body
    );
    res.status(200).send(updated);
  }

  async post(req: Request, res: Response) {
    const created = await this.collection.create(req.body);
    res.status(200).send(created);
  }

  async delete(req: Request, res: Response) {
    const deleted = await this.collection.delete(Number(req.params.id ?? -1));
    res.status(200).send(deleted);
  }
}
