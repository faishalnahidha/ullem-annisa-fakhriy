import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { myTheme } from './theme'; // import file custom theming

import LandingPage from './pages/LandingPage.jsx';
import CMS from './pages/CMS.jsx';

const App = () => (
  <>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/ims" component={CMS} />
          <Route path="/:id" component={LandingPage} />
        </Switch>
      </ThemeProvider>
    </StyledEngineProvider>
  </>
);

export default App;
