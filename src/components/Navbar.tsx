import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import React from 'react'

export default React.memo(function Navbar() {
  return (
    <Paper variant="outlined" square>
      <Container maxWidth="lg">
        <AppBar position="static" color="transparent" elevation={0}>
          <Typography
            variant="h6"
            color="primary"
            component="h1"
            sx={{
              fontFamily: 'Poppins, Arial',
              fontSize: '1.5rem',
              padding: '1.2rem 0',
              letterSpacing: '0.125rem'
            }}
          >
            NOMOS
          </Typography>
        </AppBar>
      </Container>
    </Paper>
  )
})
