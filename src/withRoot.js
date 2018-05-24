import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import lightBlue from '@material-ui/core/colors/lightBlue';

// `theme` object to customize MaterialUI default theme.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#73e8ff',
      main: lightBlue[400],
      dark: '#0086c3'
    },
    secondary: {
      light: '#ffffff',
      main: lightBlue[50],
      dark: '#afc2cb'
    }
  }
});

// HOC to inject `theme` inside the app.
// `CssBaseline` normalizes CSS default styles across browsers.
function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }
  return WithRoot;
}

export default withRoot;
