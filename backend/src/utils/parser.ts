import { Request } from 'express';
import { CompaniesSearchCriteria } from '../controllers/api.types';

export const getParsedQueryParameters = (req: Request) => {
  const { pageSize, pageNumber, ...criteria } = req.query;
  const parsedPageSize = parseInt(req.query.pageSize as string);
  const parsedPageNumber = parseInt(req.query.pageNumber as string);
  const parsedCriteria = criteria as CompaniesSearchCriteria;

  return {
    pageSize: parsedPageSize,
    pageNumber: parsedPageNumber,
    criteria: parsedCriteria,
  };
};
