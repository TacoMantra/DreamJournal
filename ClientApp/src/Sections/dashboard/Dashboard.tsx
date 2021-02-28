import * as React from 'react';
import { Typography, Grid } from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AlarmCard from '../../components/alarm-card';

// TODO: replace this mock
const alarms = [
  {
    time: '7:00am',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  },
  {
    time: '9:00am',
    days: ['Sat', 'Sun'],
  },
];

const Dashboard = () => (
  <>
    <Grid container alignItems="center">
      <AccessAlarmIcon />
      <Typography variant="h5">
        Alarms
      </Typography>
    </Grid>
    {alarms.map((alarm) => <AlarmCard time={alarm.time} days={alarm.days} />)}
  </>
);

export default Dashboard;
