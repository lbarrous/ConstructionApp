import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import * as React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { SPECIALTIES, useFilters } from '../../hooks/useFilters';
import { useSorting } from '../../hooks/useSorting';
import { ConstructionCompany } from '../../pages/api/api.types';
import { Filters } from '../Filters/Filters';
import Loader from '../Loader/Loader';
import { Logo } from '../Logo/Logo';
import { Column } from './Table.types';
import { TBody } from './TableBody';
import { THead } from './TableHeader';

const columns: readonly Column[] = [
  {
    id: 'name',
    disablePadding: false,
    label: 'Name',
    cellContent: (company: ConstructionCompany) => company.name,
    sortable: true,
  },
  {
    id: 'city',
    disablePadding: false,
    label: 'City',
    cellContent: (company: ConstructionCompany) => company.city,
    sortable: true,
  },
  {
    id: 'specialties',
    disablePadding: false,
    label: 'Specialty',
    cellContent: (company: ConstructionCompany) => company.specialties,
    sortable: true,
  },
  {
    id: 'logoPath',
    disablePadding: false,
    label: 'Logo',
    cellContent: (company: ConstructionCompany) => <Logo logoPath={company.logoPath}/>,
    sortable: false,
  },
];

const SERVER_URL = process.env.SERVER_URL || '';

const CompanyTable = () => {
  const { order, setOrder, orderBy, setOrderBy, getComparator } = useSorting(
    'asc',
    'name'
  );
  const { specialties, setFilter, search, setSearch } = useFilters();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { loading, dataFromServer } = useFetch(SERVER_URL);

  const data = dataFromServer as ConstructionCompany[];

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof ConstructionCompany
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = React.useMemo(() => {
    return data
      .slice()
      .sort(getComparator(order, orderBy))
      .filter((company) =>
        specialties.includes(SPECIALTIES[company.specialties as SPECIALTIES])
      )
      .filter((company) =>
        Object.values(company).some((companyValues) =>
          (companyValues as string).toLowerCase().includes(search.toLowerCase())
        )
      );
  }, [order, orderBy, specialties, search, loading, data]);

  const paginatedData = React.useMemo(() => {
    return filteredData.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    )
  }, [page, rowsPerPage, filteredData]);



  return (
    <Box sx={{ width: '100%' }}>
      {loading ? (
        <Loader />
      ) : (
        <Paper sx={{ width: '100%', mb: 2 }}>
          <Filters
            setFilter={setFilter}
            specialties={specialties}
            setSearch={setSearch}
            query={search}
          />
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle'>
              <THead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                columns={columns}
              />
              <TBody
                columns={columns}
                rows={paginatedData}
              />
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </Box>
  );
};

export default CompanyTable;
