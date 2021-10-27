import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { SPECIALTIES } from '../../hooks/useFilters';

type FilterProps = {
  specialties: SPECIALTIES[];
  setFilter: (specialty: SPECIALTIES) => void;
  query: string;
  setSearch: (input: string) => void;
};

export const Filters = (props: FilterProps) => {
  const { setFilter, specialties, query, setSearch } = props;
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <>
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant='h6'
          id='tableTitle'
          component='div'
        >
          Filters
        </Typography>
        <FormGroup
          sx={{
            padding: '1rem',
          }}
        >
          <TextField
            label='Search'
            variant='outlined'
            value={query}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(event.target.value)
            }
          />
          <FormGroup
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={specialties.includes(SPECIALTIES.ELECTRICAL)}
                />
              }
              label='ELECTRICAL'
              onChange={() => setFilter(SPECIALTIES.ELECTRICAL)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={specialties.includes(SPECIALTIES.PLUMBING)}
                />
              }
              label='PLUMBING'
              onChange={() => setFilter(SPECIALTIES.PLUMBING)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={specialties.includes(SPECIALTIES.EXCAVATION)}
                />
              }
              label='EXCAVATION'
              onChange={() => setFilter(SPECIALTIES.EXCAVATION)}
            />
          </FormGroup>
        </FormGroup>
      </>
    </Toolbar>
  );
};
