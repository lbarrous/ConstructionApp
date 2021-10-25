export interface ConstructionCompany {
    name: String;
    logoPath: string;
    specialties: String;
    city: String;
}

export type CompanyProperties = keyof ConstructionCompany;

export type CompaniesSearchCriteria = {
  [key in CompanyProperties]: string;
};