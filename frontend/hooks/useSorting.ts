import { ConstructionCompany } from '../pages/api/api.types';
import { useState } from 'react';

export type Order = 'asc' | 'desc';

const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = <Key extends keyof ConstructionCompany>(
  order: Order,
  orderBy: Key
): ((a: ConstructionCompany, b: ConstructionCompany) => number) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

export const useSorting = (initialOrder: Order, initialOrderBy: keyof ConstructionCompany) => {
  const [order, setOrder] = useState<Order>(initialOrder);
  const [orderBy, setOrderBy] = useState<keyof ConstructionCompany>(initialOrderBy);

  return { order, setOrder, orderBy, setOrderBy, getComparator };
};
