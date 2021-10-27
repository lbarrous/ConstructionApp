export interface ConstructionCompany {
    name: string;
    logoPath: string;
    specialties: string;
    city: string;
}

export type CompanyProperties = keyof ConstructionCompany;

export type CompaniesSearchCriteria = {
  [key in CompanyProperties]: string;
};