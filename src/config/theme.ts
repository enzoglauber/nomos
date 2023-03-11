import '@mui/lab/themeAugmentation'
import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 760,
      md: 1060,
      lg: 1360,
      xl: 1536
    }
  },
  typography: {
    fontFamily: 'Inter, Arial'
  },
  palette: {
    primary: {
      main: '#3f8ce9'
    },
    secondary: {
      main: '#0b1f4d'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#F9FAFC',
      paper: '#FFF'
    }
  }
})

export default theme
