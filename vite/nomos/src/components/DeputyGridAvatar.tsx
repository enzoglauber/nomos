import Avatar from '@mui/material/Avatar'

import { Deputados } from '../interfaces/Deputados'
interface DeputyGridAvatarProps {
  deputy: Deputados
}

export default function DeputyGridAvatar({ deputy }: DeputyGridAvatarProps) {
  return (
    <Avatar
      alt={deputy.nome}
      src={deputy.urlFoto}
      sx={{ width: 56, height: 56, border: '1px solid', borderColor: 'primary.main' }}
    />
  )
}
