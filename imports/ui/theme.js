import { createTheme } from '@mui/material/styles';

export const myTheme = createTheme({
  palette: {
    primary: {
      light: '#60fde0',
      main: '#00c9ae',
      dark: '#00977f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c7bcb3',
      main: '#968c83',
      dark: '#685f56',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(57, 50, 50, 0.87)',
      secondary: 'rgba(57, 50, 50, 0.54)',
      dark: '#393232',
    },
    background: {
      paper: '#fff',
      default: '#fffaf5',
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    allVariants: {
      color: 'rgba(57, 50, 50, 0.87)',
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
