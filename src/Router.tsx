import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom'

import Deputies from './pages/Deputies'
import Deputy from './pages/Deputy'
import Root from './templates/Root'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to="/deputados" replace />} />
      <Route path="deputados">
        <Route index element={<Deputies />} />
        <Route path=":id" element={<Deputy />} />
      </Route>
    </Route>
  )
)

export default router
