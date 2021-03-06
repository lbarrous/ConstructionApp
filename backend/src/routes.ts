import { Express, Request, Response } from 'express';
import { getCompaniesHandler } from './controllers/ConstructionCompanies.controller';

export default function (app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
  /* Building companies */
  app.get('/api/companies', getCompaniesHandler);
}
