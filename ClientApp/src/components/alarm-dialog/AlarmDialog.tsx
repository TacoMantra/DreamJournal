import {
    Dialog, DialogTitle, DialogContent, DialogActions, Typography, Grid, Button,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import ReactAudioPlayer from 'react-audio-player';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { AppState } from '../../store/configureStore';
import WindChimes from '../../assets/sounds/118979__esperri__windchimes-2.wav';
import Orchestra from '../../assets/sounds/371059__joshuaempyre__duduk-with-orchestra.wav';
import Bell from '../../assets/sounds/361496__tec-studio__bell-echo.wav';
import { dismissAlarmById } from '../../features/alarms';
import { AddDreamPath } from '../../Sections/add-dream/AddDream';

const AlarmDialog = (): React.FC => {
    const dispatch = useDispatch();
    const history = useHistory();

    const alarms = useSelector((state: AppState) => state.alarms.entities);
    const [time, setTime] = useState(DateTime.now);
    const [isOpen, setIsOpen] = useState(false);
    const [soundFile, setSoundFile] = useState(null);
    const [alarmId, setAlarmId] = useState(null);

    const getSoundFile = (name: string) => {
        switch (name) {
            case 'WindChimes':
                return WindChimes;
            case 'Orchestra':
                return Orchestra;
            case 'Bell':
                return Bell;
            default:
                return WindChimes;
        }
    };

    const checkAlarm = () => {
        setTime(DateTime.now);
        Object.values(alarms).forEach((a) => {
            const wasDismissedToday = a?.dismissed === DateTime.now().toISODate();

            if (a.days.includes(time.weekdayLong) && a.time === time.toLocaleString(DateTime.TIME_SIMPLE) && !wasDismissedToday) {
                setSoundFile(getSoundFile(a.soundFile));
                setIsOpen(true);
                setAlarmId(a.id);
            }
        });
    };

    useEffect(() => {
        const timer = setInterval(checkAlarm, 1000);
        return () => clearInterval(timer);
    });

    const handleDismiss = () => {
        setIsOpen(false);
        setSoundFile(null);
        dispatch(dismissAlarmById(alarmId));
    };

    const handleRecord = () => {
        setIsOpen(false);
        setSoundFile(null);
        dispatch(dismissAlarmById(alarmId));
        history.push(AddDreamPath);
    };

    return (
        <Dialog aria-labelledby="alarm-dialog-title" open={isOpen} maxWidth="xs" fullWidth>
            <DialogTitle id="alarm-dialog-title">
                <Grid item container alignItems="center" direction="row">
                    <AccessAlarmIcon />
                    <Typography variant="h5">
                        {' Alarm!'}
                    </Typography>
                </Grid>
            </DialogTitle>
            <DialogContent>
                <Typography>Are you ready to wake up?</Typography>
            </DialogContent>
            <DialogActions>
                <Button color="secondary" onClick={handleDismiss}>
                    Dismiss
                </Button>
                <Button color="primary" variant="contained" onClick={handleRecord}>
                    Record a Dream
                </Button>
            </DialogActions>
            {soundFile ? <ReactAudioPlayer src={soundFile} autoPlay loop /> : null}
        </Dialog>
    );
};

export default AlarmDialog;
