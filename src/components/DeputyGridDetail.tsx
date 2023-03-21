import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Deputados } from '../interfaces/Deputados'

export interface DeputyGridDetailProps {
  deputy: Deputados
}

function DeputyGridDetail({ deputy }: DeputyGridDetailProps) {
  return (
    <Grid item xs container direction="column" spacing={0} data-testid="deputy-grid-detail">
      <Grid item xs>
        <Typography
          variant="h3"
          gutterBottom
          color="secondary"
          component={'span'}
          data-testid="deputy-grid-detail-name"
        >
          {deputy.nome}
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          color="primary"
          marginLeft={3}
          component={'span'}
        >
          Deputado Federal
        </Typography>
      </Grid>
      <Grid item xs>
        <span>
          <Typography variant="subtitle2" gutterBottom color="text.primary" component={'b'}>
            Partido:
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            color="primary"
            marginRight={3}
            component={'span'}
            data-testid="deputy-grid-detail-party"
          >
            {' '}
            {deputy.siglaPartido}
          </Typography>
        </span>
        <span>
          <Typography variant="subtitle2" gutterBottom color="text.primary" component={'b'}>
            UF:
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            color="primary"
            marginRight={3}
            component={'span'}
            data-testid="deputy-grid-detail-uf"
          >
            {' '}
            {deputy.siglaUf}
          </Typography>
        </span>
        <Chip label="Em exercício" color="primary" variant="outlined" size="small" />
      </Grid>
    </Grid>
  )
}

export default DeputyGridDetail
