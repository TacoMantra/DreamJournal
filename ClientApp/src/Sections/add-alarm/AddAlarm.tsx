import React, { useState } from 'react';
import {
    Typography, Grid, IconButton, makeStyles, NativeSelect, FormControl, Button,
} from '@material-ui/core';
import { TimePicker } from '@material-ui/pickers';
import { DateTime } from 'luxon';
import clsx from 'clsx';
import ReactAudioPlayer from 'react-audio-player';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import soundFiles from '../../consts/terms/soundFiles';
import WindChimes from '../../assets/sounds/118979__esperri__windchimes-2.wav';
import Orchestra from '../../assets/sounds/371059__joshuaempyre__duduk-with-orchestra.wav';
import Bell from '../../assets/sounds/361496__tec-studio__bell-echo.wav';
import Alarm from '../../models/alarm';
import { getEnumStringValues } from '../../utils/index';
import DaysOfWeek from '../../consts/enums/daysOfWeek';
import { createAlarmForUser } from '../../features/alarms';
import mockUserId from '../../consts/mocks';

const AddAlarm = (): React.FC => {
    const useStyles = makeStyles((theme) => ({
        dayButton: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
        dayButtonSelected: {
            background: theme.palette.action.selected,
        },
        sectionLabel: {
            marginBottom: theme.spacing(2),
        },
    }));
    const dispatch = useDispatch();
    const history = useHistory();

    const [selectedTime, setSelectedTime] = useState(DateTime.now());
    const [selectedDays, setSelectedDays] = useState([]);
    const [soundName, setSoundName] = useState('');
    const [soundFileName, setSoundFileName] = useState('');
    const [soundFile, setSoundFile] = useState(null);

    const toggleDaySelection = (day: number) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter((d) => d !== day));
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };

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

    const handleChangeSoundFile = (event) => {
        const selectedSoundFileName = Object.values(soundFiles).find((s) => s.name === event.target.value)?.file;
        setSoundName(event.target.value);
        setSoundFileName(selectedSoundFileName);
        setSoundFile(getSoundFile(selectedSoundFileName));
    };

    const handleSave = () => {
        const alarm = Alarm.create({
            time: selectedTime.toLocaleString(DateTime.TIME_24_WITH_SECONDS),
            days: selectedDays,
            soundFile: soundFileName,
        });

        dispatch(createAlarmForUser({
            userId: mockUserId,
            alarm,
        }));

        history.push('/');
    };

    const classes = useStyles();

    return (
        <Grid
            container
            direction="column"
            spacing={2}
        >
            <Grid item container alignItems="center" xs={9}>
                <AccessAlarmIcon />
                <Typography variant="h5">
                    {' New Alarm'}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6" className={classes.sectionLabel}>Time</Typography>
                <TimePicker
                    value={selectedTime}
                    onChange={setSelectedTime}
                    fullWidth
                />
            </Grid>
            <Grid item>
                <Typography variant="h6" className={classes.sectionLabel}>Repeat</Typography>
                <Grid container justify="space-around">
                    {
                        getEnumStringValues(DaysOfWeek).map((d) => (
                            <Grid item key={d}>
                                <IconButton
                                    className={
                                        selectedDays.includes(d)
                                            ? clsx([classes.dayButton, classes.dayButtonSelected])
                                            : classes.dayButton
                                    }
                                    onClick={() => toggleDaySelection(d)}
                                >
                                    {d.slice(0, 1)}
                                </IconButton>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="h6" id="soundFile-label" className={classes.sectionLabel}>Sound</Typography>
                <FormControl fullWidth>
                    <NativeSelect
                        fullWidth
                        aria-labelledby="soundFile-label"
                        value={soundName}
                        onChange={handleChangeSoundFile}
                    >
                        <option value="" disabled>
                            Select a Sound
                        </option>
                        {Object.keys(soundFiles).map((s) => {
                            const fileInfo = soundFiles[s];
                            return <option key={s} value={fileInfo.name}>{fileInfo.name}</option>;
                        })}
                    </NativeSelect>
                </FormControl>
                {soundFile ? <ReactAudioPlayer src={soundFile} autoPlay /> : null}
            </Grid>
            <Grid item container justify="flex-end">
                <Button
                    variant="contained"
                    color="primary"
                    disabled={selectedDays.length === 0 || !soundFile}
                    onClick={handleSave}
                >
                    Save
                </Button>
            </Grid>
        </Grid>
    );
};

export const AddAlarmPath = '/add-alarm';

export default AddAlarm;
