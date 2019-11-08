// import { ExpressContext } from 'apollo-server';
import { Request, Response } from 'express';

export interface ServerContext {
  req: Request;
  res: Response;
  payload?: { userId: string };
}
