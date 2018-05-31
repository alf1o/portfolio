import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// `theme` object to customize MaterialUI default theme.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#64ffff',
      main: '#00cccc',
      dark: '#009a9b'
    },
    secondary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#cccccc'
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
