import Avatar from '@mui/material/Avatar'
import React from 'react'

import { Deputado } from '../interfaces/Deputado'
interface DeputyGridAvatarProps {
  deputy: Deputado
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
