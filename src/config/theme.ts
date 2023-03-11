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
    fontFamily: 'Inter, Arial',
    h2: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: '2rem'
    },
    subtitle2: {
      fontWeight: 400,
      lineHeight: '1.25rem'
    }
  },
  palette: {
    primary: {
      main: '#3F8BE9'
    },
    secondary: {
      main: '#0A2156'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#F9FAFC',
      paper: '#FFF'
    },
    text: {
      primary: '#606162',
      secondary: '#3F8BE9'
    }
  }
})

export default theme
