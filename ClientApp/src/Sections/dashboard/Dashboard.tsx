import * as React from 'react';
import { Grid } from '@material-ui/core';
import AlarmList from '../../components/alarm-list/AlarmList';
import mockAlarms from '../../mocks/alarms';

const Dashboard = (): React.FC => (
  <Grid direction="column">
    <AlarmList alarms={mockAlarms} />
  </Grid>
);

export default Dashboard;
