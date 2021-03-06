
import { Request, Response } from 'express';
import { findCompaniesByCriteria } from '../services/ConstructionCompanies.service';
import { getParsedQueryParameters } from '../utils/parser'

export const getCompaniesHandler = async (req: Request, res: Response) => {
    try {
        const { criteria } = getParsedQueryParameters(req);
        const companies = findCompaniesByCriteria(criteria)
  
        return res.status(200).json(companies);
      } catch(e){
        return res.status(500).json(e)
      }
};
