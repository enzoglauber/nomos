import Box from '@mui/material/Box'
import React from 'react'

interface BoxContainerProps {
  children: React.ReactNode
  color?: string
}

export default function BoxContainer({ children, color = 'primary.main' }: BoxContainerProps) {
  return (
    <Box>
      <Box sx={{ backgroundColor: color, height: '15.75rem' }} />
      <Box sx={{ my: 6, mt: -16, display: 'flex', justifyContent: 'center' }}>{children}</Box>
    </Box>
  )
}
