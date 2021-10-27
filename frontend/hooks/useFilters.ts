import { useState } from 'react';

export enum SPECIALTIES {
  PLUMBING = 'PLUMBING',
  EXCAVATION = 'EXCAVATION',
  ELECTRICAL = 'ELECTRICAL',
}

const initialSpecialties = [
  SPECIALTIES.PLUMBING,
  SPECIALTIES.EXCAVATION,
  SPECIALTIES.ELECTRICAL,
];

export const useFilters = (
  initialState: SPECIALTIES[] = initialSpecialties,
  initialSearch: string = ''
) => {
  const [specialties, setSpecialties] =
    useState<Array<SPECIALTIES>>(initialState);
  const [search, setSearch] = useState<string>(initialSearch);

  const setFilter = (specialty: SPECIALTIES) => {
    setSpecialties(
      specialties.includes(specialty)
        ? [
            ...specialties.slice(0, specialties.indexOf(specialty)),
            ...specialties.slice(specialties.indexOf(specialty) + 1),
          ]
        : specialties.concat(specialty)
    );
  };

  return { specialties, setFilter, search, setSearch };
};
