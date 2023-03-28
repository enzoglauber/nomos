import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { useParams } from 'react-router-dom'
import CardHeaderDeputyAvatar from '../components/CardHeaderDeputyAvatar'

import RowLabelValue from '../components/RowLabelValue'
import { useDeputy } from '../hooks/useDeputy'
import BoxContainer from '../templates/BoxContainer'

function Deputy() {
  const { id } = useParams()
  const { data } = useDeputy(id)

  const address =
    data?.dados.ultimoStatus.gabinete.nome !== null
      ? `
        ${data?.dados.ultimoStatus.gabinete.sala} - 
        ${data?.dados.ultimoStatus.gabinete.predio} - 
        ${data?.dados.ultimoStatus.gabinete.andar}
      `
      : '-'

  const bday = data?.dados.dataNascimento
    ? new Date(data?.dados.dataNascimento).toLocaleDateString('pt-br')
    : undefined

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
            avatar={<CardHeaderDeputyAvatar deputy={data?.dados} />}
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
