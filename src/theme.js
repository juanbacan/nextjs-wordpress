import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';


//let theme = createTheme();

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '1.3rem',
    },
    h4: {
      fontSize: '1.1rem',
    },
    h5: {
      fontSize: '0.9rem',
    },
    h6: {
      fontSize: '0.8rem',
    },
    subtitle1: {
      fontSize: 12,
    },
  },
  shape: {
    //borderRadius: 16,
    borderRadius: 8,
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

//theme = responsiveFontSizes(theme);


export default theme;
