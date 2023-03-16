import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import { useLocation, useParams } from 'react-router-dom'

import RowLabelValue from '../components/RowLabelValue'
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

  const address =
    data?.dados.ultimoStatus.gabinete.nome === 'null'
      ? `
        ${data?.dados.ultimoStatus.gabinete.nome} - 
        ${data?.dados.ultimoStatus.gabinete.predio} - 
        ${data?.dados.ultimoStatus.gabinete.sala} - 
        ${data?.dados.ultimoStatus.gabinete.andar}
      `
      : '-'

  const bday = data?.dados.dataNascimento
    ? new Date(data?.dados.dataNascimento).toLocaleDateString('pt-br')
    : null
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
            <RowLabelValue label={'Nome Civil:'} value={data?.dados.nomeCivil} />
            <RowLabelValue label={'Email:'} value={data?.dados.ultimoStatus.email} />
            <RowLabelValue label={'Telefone:'} value={data?.dados.ultimoStatus.gabinete.telefone} />
            <RowLabelValue label={'Endereço:'} value={address} />
            <RowLabelValue label={'Nascimento:'} value={bday} />
            <RowLabelValue
              label={'Naturalidade:'}
              value={`${data?.dados.municipioNascimento} - ${data?.dados.ufNascimento}`}
            />
          </CardContent>
        </Card>
      </BoxContainer>
    </>
  )
}

export default Deputy
