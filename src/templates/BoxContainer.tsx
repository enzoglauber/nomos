import { Box } from '@mui/material'
import React from 'react'

export interface BoxContainerProps {
  children: React.ReactNode
  color?: string
}

function BoxContainer({ children, color = 'primary.main' }: BoxContainerProps) {
  return (
    <Box>
      <Box sx={{ backgroundColor: color, height: '15.75rem' }} />
      <Box sx={{ my: 6, mt: -16, display: 'flex', justifyContent: 'center' }}>{children}</Box>
    </Box>
  )
}

export default BoxContainer
