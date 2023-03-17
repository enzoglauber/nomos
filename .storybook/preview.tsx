// import { themes } from '@storybook/theming'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { initialize, mswDecorator } from 'msw-storybook-addon'

import React from 'react'

import theme from '../src/config/theme'

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {Story()}
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
