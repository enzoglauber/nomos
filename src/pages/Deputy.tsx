import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import { useLocation, useParams } from 'react-router-dom'

import useDeputy from '../hooks/useDeputy'
import BoxContainer from '../templates/BoxContainer'

function Deputy() {
  const { id } = useParams()
  const { data } = useDeputy(id)
  const { state } = useLocation()

  const period = data?.dados.ultimoStatus.data
    ? `${new Date(data?.dados.ultimoStatus.data || '').getFullYear()} - ${
        new Date(data?.dados.ultimoStatus.data || '').getFullYear() + 4
      }`
    : ''
  return (
    <>
      <BoxContainer>
        <Card
          variant="outlined"
          elevation={0}
          sx={{ border: 'none', borderRadius: 2, width: '24rem' }}
        >
          <CardHeader
            sx={{ borderBottom: '1px solid', borderColor: 'divider', flexDirection: 'column' }}
            avatar={
              <Box
                sx={{
                  marginLeft: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Avatar
                  alt={state?.deputy.nomeCivil}
                  src={state?.deputy.urlFoto}
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
                  {state?.deputy.nome}
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  color="secondary"
                  sx={{ fontSize: '1rem' }}
                >
                  Partido: {state?.deputy.siglaPartido}
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  color="text.primary"
                  sx={{ textTransform: 'uppercase' }}
                >
                  {`${data?.dados.ultimoStatus.condicaoEleitoral} em ${data?.dados.ultimoStatus.situacao} `}
                  <span className="period">{`${period}`}</span>
                </Typography>
              </Box>
            }
          />
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {data?.dados.nomeCivil}
            </Typography>
            <Typography variant="h5" component="div">
              legal {id}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </BoxContainer>
    </>
  )
}

export default Deputy
