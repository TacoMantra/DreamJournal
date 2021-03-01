import * as React from 'react';
import { Grid, useTheme } from '@material-ui/core';
import AlarmList from '../../components/alarm-list';
import mockAlarms from '../../mocks/alarms';
import mockDreams from '../../mocks/dreams';
import DreamList from '../../components/dream-list';

const Dashboard = (): React.FC => {
  const theme = useTheme();
  return (
    <Grid direction="column" spacing={theme.spacing(2)}>
      <AlarmList alarms={mockAlarms} />
      <DreamList dreams={mockDreams} />
    </Grid>
  );
};

export default Dashboard;
