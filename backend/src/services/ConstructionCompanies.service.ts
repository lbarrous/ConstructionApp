import { CompaniesSearchCriteria, CompanyProperties, ConstructionCompany } from '../controllers/api.types';
import data from '../data/MOCK_DATA.json';
import { paginateData } from './DataPagination.service';

export const findCompaniesByCriteria = (
  criteria: CompaniesSearchCriteria,
  pageSize: number,
  pageNumber: number
): ConstructionCompany[] => {
  const filteredCompanies = data.filter((company: ConstructionCompany) =>
    Object.entries(criteria).every((entry: string[]) => company[entry[0] as CompanyProperties].includes(entry[1]))
  );
  return paginateData(filteredCompanies, pageSize, pageNumber);
};

export const findAllCompanies = (
  pageSize: number,
  pageNumber: number
): ConstructionCompany[] => paginateData(data, pageSize, pageNumber);
