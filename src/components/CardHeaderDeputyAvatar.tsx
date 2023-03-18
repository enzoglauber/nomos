import { Box } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import { Deputado } from '../interfaces/Deputado'

export interface CardHeaderDeputyAvatarProps {
  deputy?: Deputado
}

export default function CardHeaderDeputyAvatar({ deputy }: CardHeaderDeputyAvatarProps) {
  const period = deputy?.ultimoStatus.data
    ? `${new Date(deputy?.ultimoStatus.data || '').getFullYear()} - ${
        new Date(deputy?.ultimoStatus.data || '').getFullYear() + 4
      }`
    : ''

  return (
    <Box
      sx={{
        marginLeft: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Avatar
        alt={deputy?.nomeCivil}
        src={deputy?.ultimoStatus.urlFoto}
        sx={{
          width: 130,
          height: 130,
          border: '0.25rem solid',
          marginBottom: 1,
          borderColor: 'primary.main'
        }}
      />
      <Typography variant="subtitle2" gutterBottom color="primary">
        Deputado Federal
      </Typography>
      <Typography variant="h3" gutterBottom color="secondary">
        {deputy?.ultimoStatus.nome}
      </Typography>
      <Typography variant="subtitle2" gutterBottom color="secondary" sx={{ fontSize: '1rem' }}>
        Partido: {deputy?.ultimoStatus.siglaPartido}
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
        color="text.primary"
        sx={{ textTransform: 'uppercase' }}
      >
        {`${deputy?.ultimoStatus.condicaoEleitoral} em ${deputy?.ultimoStatus.situacao} `}
        <span className="period">{`${period}`}</span>
      </Typography>
    </Box>
  )
}
