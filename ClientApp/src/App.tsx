import * as React from 'react';
import { Route } from 'react-router';
import LuxonUtils from '@date-io/luxon';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Layout from './components/layout/Layout';
import Dashboard from './Sections/dashboard/Dashboard';
import AddAlarm from './Sections/add-alarm';
import AppMenu from './components/app-menu/index';
import { AddAlarmPath } from './Sections/add-alarm/AddAlarm';

export default (): React.FC => (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
        <AppMenu />
        <Layout>
            <Route exact path="/" component={Dashboard} />
            <Route exact path={AddAlarmPath} component={AddAlarm} />
        </Layout>
    </MuiPickersUtilsProvider>
);
