import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Root() {
  return (
    <>
      <Navbar />
      <main data-testid="outlet">
        <Outlet />
      </main>
    </>
  )
}

export default Root
