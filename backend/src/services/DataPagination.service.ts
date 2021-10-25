import { ConstructionCompany } from '../controllers/api.types';

export const paginateData = (
  data: ConstructionCompany[],
  pageSize: number,
  pageNumber: number
) => data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
