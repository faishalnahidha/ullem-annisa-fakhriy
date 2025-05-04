import { createTheme } from '@mui/material/styles';

export const myTheme = createTheme({
  palette: {
    primary: {
      light: '#47B2C1',
      main: '#199FB2',
      dark: '#116F7C',
      contrastText: '#F6FBFC',
      container: '#AEEDF3'
    },
    secondary: {
      light: '#9B5333',
      main: '#832800',
      dark: '#5B1C00',
      contrastText: '#F6FBFC',
      variant: '#FF7900'
    },
    text: {
      primary: 'rgba(14, 46, 62, 0.87)',
      secondary: 'rgba(14, 46, 62, 0.54)',
      dark: '#0E313E',
    },
    background: {
      paper: '#F6FBFC',
      default: '#D4F7F9',
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    allVariants: {
      color: 'rgba(14, 46, 62, 0.87)',
    },
    h5: {
      letterSpacing: '0.18px',
    },
    h6: {
      fontWeight: 700,
      lineHeight: '24px',
      letterSpacing: '0.25px',
    },
    subtitle1: {
      fontWeight: 700,
      letterSpacing: '0.15px',
    },
    subtitle2: {
      fontWeight: 700,
    },
    body1: {
      lineHeight: '24px',
      letterSpacing: '0.5px',
    },
    body2: {
      lineHeight: '20px',
      letterSpacing: '0.25px',
    },
    button: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: '1.1px',
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: '50px' },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: { borderRadius: '8px' },
      },
    },
  },
});
