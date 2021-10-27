import { CompaniesSearchCriteria, CompanyProperties, ConstructionCompany } from '../controllers/api.types';
import data from '../data/MOCK_DATA.json';

export const findCompaniesByCriteria = (
  criteria: CompaniesSearchCriteria
): ConstructionCompany[] => {
  return data.filter((company: ConstructionCompany) =>
    Object.entries(criteria).every((entry: string[]) => company[entry[0] as CompanyProperties].includes(entry[1]))
  );
};
