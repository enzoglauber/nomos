import Avatar from '@mui/material/Avatar'

import { Deputados } from '../interfaces/Deputados'
export interface DeputyGridAvatarProps {
  deputy: Deputados
}

function DeputyGridAvatar({ deputy }: DeputyGridAvatarProps) {
  return (
    <Avatar
      alt={deputy.nome}
      src={deputy.urlFoto}
      sx={{ width: 56, height: 56, border: '1px solid', borderColor: 'primary.main' }}
      data-testid="deputy-grid-avatar"
    />
  )
}

export default DeputyGridAvatar
