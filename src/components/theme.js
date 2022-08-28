import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';

const rawTheme = createTheme({
  palette: {
    primary: {
      light: '#16B3B2',
      main: '#0FAACD',
      dark: '#1e1e1f',
      contrastText: 'rgba(0,0,0,0.8)',
    },
    secondary: {
      light: '#21c37e',
      main: '#27cc62',
      dark: '#16b3b2',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
    text: {
      primary: 'rgba(103,103,103,0.93)',
      secondary: 'rgba(103,103,103,0.69)',
      disabled: 'rgba(103,103,103,0.48)',
      bold: 'rgba(30,30,30,0.92)',
      hint: 'rgba(0,0,0,0.48)',
    },
    neutral: {
      light: '#fbfbfb',
      main: '#fafafa',
      dark: '#e6edf0',
      disabled: '#afafaf',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'Tenor Sans', 'sans-serif'].join(','),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
  }
});

const fontHeader = {
  color: rawTheme.palette.text.bold,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Tenor Sans', Poppins, sans-serif",
};

const augmentedTheme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.neutral.main,
    },
  },
  typography: {
    ...rawTheme.typography,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: '2.5rem',
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: '2rem',
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: '1.5rem',
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: '1.25rem',
    },
    h5: {
      ...rawTheme.typography.h5,
      ...fontHeader,
      fontSize: '1.125rem',
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: '1rem',
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: '1rem',
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: '0.875rem',
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: '0.75rem',
    },
    button: {
      ...rawTheme.typography.button,
      fontSize: '0.875rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '12px 24px',
        }
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: { color: rawTheme.palette.neutral.main },
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            '&:hover': {
              backgroundColor: rawTheme.palette.primary.light,
            }
          }
        }
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          boxShadow: 'none',
        },
      },
    },
  },
};

const theme = responsiveFontSizes(augmentedTheme);

export default theme;
