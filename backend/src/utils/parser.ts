import { Request } from 'express';
import { CompaniesSearchCriteria } from '../controllers/api.types';

export const getParsedQueryParameters = (req: Request) => {
  const parsedCriteria = req.query as CompaniesSearchCriteria;
  return {
    criteria: parsedCriteria,
  };
};
