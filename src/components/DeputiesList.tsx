import NorthEastIcon from '@mui/icons-material/NorthEast'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom'

import { Deputado } from '../interfaces/Deputado'
import DeputyGridAvatar from './DeputyGridAvatar'
import DeputyGridDetail from './DeputyGridDetail'

interface DeputiesListProps {
  data?: Deputado[]
}

export default function DeputiesList({ data }: DeputiesListProps) {
  return (
    <Stack spacing={2}>
      {data?.map((deputy) => (
        <Paper elevation={0} key={deputy.id} sx={{ p: 2 }}>
          <Grid container spacing={4}>
            <Grid item>
              <DeputyGridAvatar deputy={deputy} />
            </Grid>
            <Grid item xs={6} container>
              <DeputyGridDetail deputy={deputy} />
            </Grid>
            <Grid
              item
              xs
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}
            >
              <Button
                component={Link}
                to={`/deputados/${deputy.id}`}
                variant="contained"
                size="small"
                endIcon={<NorthEastIcon />}
              >
                Detalhes
              </Button>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Stack>
  )
}
