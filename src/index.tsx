import ReactDOM from 'react-dom/client'
import App from './App'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './config/theme'

const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement!)

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
  // <React.StrictMode>
  // </React.StrictMode>
)
