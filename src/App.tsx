import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { RouterProvider } from 'react-router-dom'
import router from './Router'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  )
}

export default App
