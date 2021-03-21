import * as React from 'react';
import { Typography, Grid, IconButton } from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AlarmCard from '../alarm-card';
import { IAlarm } from '../../models/alarm/Alarm';

const AlarmList = ({ alarms }: { alarms: Array<IAlarm> }): React.FC => (
    <>
        <Grid item container alignItems="center">
            <Grid item container alignItems="center" xs={9}>
                <AccessAlarmIcon />
                <Typography variant="h5">
                    {' Alarms'}
                </Typography>
            </Grid>
            <Grid item container justify="flex-end" xs={3}>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </Grid>
        </Grid>
        {alarms.slice(0, 3).map((alarm) => (
            <AlarmCard
                time={alarm.time}
                days={alarm.days}
                key={`${alarm.time}${alarm.days.join()}`}
            />
        ))}
        <IconButton>
            <MoreHorizIcon />
        </IconButton>
    </>
);

export default AlarmList;
