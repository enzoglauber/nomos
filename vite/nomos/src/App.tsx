import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { RouterProvider } from 'react-router-dom'
import Store from './contexts/Store'
import router from './Router'

const queryClient = new QueryClient()

function App() {
  return (
    <Store>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </div>
    </Store>
  )
}

export default App
