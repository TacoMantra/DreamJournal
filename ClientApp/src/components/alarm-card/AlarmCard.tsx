import {
    makeStyles, Card, Typography, Grid, IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { useDispatch } from 'react-redux';
import type { IAlarm } from '../../models/alarm/Alarm';
import { deleteAlarmById } from '../../features/alarms';

const AlarmCard = ({ time, days, id }: IAlarm): React.FC => {
    const dispatch = useDispatch();

    const useStyles = makeStyles((theme) => ({
        root: {
            margin: theme.spacing(2, 1),
            padding: theme.spacing(1),
        },
    }));

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Grid container alignItems="center">
                <Grid item xs={9}>
                    <Typography variant="h6">{time}</Typography>
                    <Typography>
                        {days.map((day, i) => {
                            if (i < days.length - 1) {
                                return `${day}, `;
                            }
                            return day;
                        })}
                    </Typography>
                </Grid>
                <Grid item container xs={3} justify="flex-end">
                    <IconButton onClick={() => { dispatch(deleteAlarmById(id)); }}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Card>
    );
};

export default AlarmCard;
