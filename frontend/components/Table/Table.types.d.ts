export type Column = {
    disablePadding: boolean;
    id: keyof ConstructionCompany;
    label: string;
    cellContent: (company: ConstructionCompany) => JSX.Element | string;
    sortable: boolean;
  }