import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Root() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ my: 6 }}>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  )
}

export default Root
