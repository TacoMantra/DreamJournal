import * as React from 'react';
import { Grid } from '@material-ui/core';
import AlarmList from '../../components/alarm-list';
import mockAlarms from '../../mocks/alarms';
import mockDreams from '../../mocks/dreams';
import DreamList from '../../components/dream-list';

const Dashboard = (): React.FC => (
  <Grid direction="column">
    <AlarmList alarms={mockAlarms} />
    <DreamList dreams={mockDreams} />
  </Grid>
);

export default Dashboard;
