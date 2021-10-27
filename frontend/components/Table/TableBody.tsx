import { TableCell, TableRow } from '@mui/material';
import { ConstructionCompany } from '../../pages/api/api.types';
import { Column } from './Table.types';
import TableBody from '@mui/material/TableBody';

type TableBodyProps = {
  columns: readonly Column[];
  rows: ConstructionCompany[];
};

export const TBody = ({ columns, rows }: TableBodyProps) => {
  return (
    <TableBody>
      {rows.map((company) => {
        return (
          <TableRow hover tabIndex={-1} key={company.name}>
            {columns.map((column) => (
              <TableCell key={column.id as string}>
                {column.cellContent(company)}
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
};
