import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Box } from '@mui/system';
import { visuallyHidden } from '@mui/utils';
import { Order } from '../../hooks/useSorting';
import { ConstructionCompany } from '../../pages/api/api.types';
import { Column } from './Table.types';

type THeadProps = {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof ConstructionCompany
  ) => void;
  order: Order;
  orderBy: string;
  columns: readonly Column[];
};

export const THead = (props: THeadProps) => {
  const { order, orderBy, onRequestSort, columns } = props;
  const createSortHandler =
    (property: keyof ConstructionCompany) =>
    (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) =>
          column.sortable ? (
            <TableCell
              key={column.id as string}
              align={'left'}
              padding={'normal'}
              sortDirection={orderBy === column.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : 'asc'}
                onClick={createSortHandler(
                  column.id as keyof ConstructionCompany
                )}
              >
                {column.label}
                {orderBy === column.id ? (
                  <Box component='span' sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ) : (
            <TableCell key="logo">{column.label}</TableCell>
          )
        )}
      </TableRow>
    </TableHead>
  );
};
