import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './config/theme'
const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement!)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
