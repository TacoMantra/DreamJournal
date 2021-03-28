import {
    Dialog, DialogTitle, DialogContent, DialogActions, Typography, Grid, Button,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import ReactAudioPlayer from 'react-audio-player';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { AppState } from '../../store/configureStore';
import WindChimes from '../../assets/sounds/118979__esperri__windchimes-2.wav';
import Orchestra from '../../assets/sounds/371059__joshuaempyre__duduk-with-orchestra.wav';
import Bell from '../../assets/sounds/361496__tec-studio__bell-echo.wav';

const AlarmDialog = (): React.FC => {
    const alarms = useSelector((state: AppState) => state.alarms.entities);
    const [time, setTime] = useState(DateTime.now);
    const [isOpen, setIsOpen] = useState(false);
    const [soundFile, setSoundFile] = useState(null);

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
            if (a.days.includes(time.weekdayLong) && a.time === time.toLocaleString(DateTime.TIME_SIMPLE)) {
                setSoundFile(getSoundFile(a.soundFile));
                setIsOpen(true);
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
                <Button color="primary" onClick={handleDismiss}>
                    Dismiss
                </Button>
            </DialogActions>
            {soundFile ? <ReactAudioPlayer src={soundFile} autoPlay loop /> : null}
        </Dialog>
    );
};

export default AlarmDialog;
