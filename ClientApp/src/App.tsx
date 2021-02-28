import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/layout/Layout';
import Dashboard from './Sections/dashboard/Dashboard';
import AppMenu from './components/app-menu/index';

export default () => (
  <>
    <AppMenu />
    <Layout>
      <Route exact path="/" component={Dashboard} />
    </Layout>
  </>
);
