import * as React from 'react';
import { Route } from 'react-router';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Layout from './components/layout/Layout';
import Dashboard from './Sections/dashboard/Dashboard';

export default () => (
  <CssBaseline>
    <ThemeProvider>
      <Layout>
        <Route exact path="/" component={Dashboard} />
      </Layout>
    </ThemeProvider>
  </CssBaseline>
);
