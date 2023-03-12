import '@mui/lab/themeAugmentation'
import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const final = createTheme({
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
    htmlFontSize: 14,
    fontSize: 14,
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
  },
  components: {
    // Name of the component
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '0.375rem 0.875rem'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme, ownerState }) =>
          theme.unstable_sx({
            color: theme.palette.text.primary,
            fontSize: '0.875rem',
            ...(ownerState.variant === 'outlined' && {
              transform: 'translate(16px, 10px) scale(1)',
              ...(ownerState.shrink && {
                transform: 'translate(15px, -9px) scale(0.95)'
              })
            })
          })
      }
    }
  }
})

export default final
