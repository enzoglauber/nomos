import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import theme from '../src/config/theme'
/* snipped for brevity */

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {Story()}
  </ThemeProvider>
)

export const decorators = [withMuiTheme]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
