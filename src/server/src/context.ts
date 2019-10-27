// import { ExpressContext } from 'apollo-server';

export interface ServerContext {
  req: any;
  res: any;
  payload?: { userId: string };
}
