// import { themes } from '@storybook/theming'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import React from 'react'

import theme from '../src/config/theme'
import Store from '../src/contexts/Store'

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <Store>
      <CssBaseline />
      {Story()}
    </Store>
  </ThemeProvider>
)

// Initialize MSW
initialize()

export const decorators = [withMuiTheme, mswDecorator]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
  // docs: {
  //   theme: themes.dark
  // }
}
