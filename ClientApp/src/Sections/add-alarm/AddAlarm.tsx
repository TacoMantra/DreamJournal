import React, { useState } from 'react';
import {
    Typography, Grid, IconButton, makeStyles, Select, FormControl, InputLabel, MenuItem,
} from '@material-ui/core';
import { TimePicker } from '@material-ui/pickers';
import { DateTime } from 'luxon';
import clsx from 'clsx';
import ReactAudioPlayer from 'react-audio-player';
import dayInitials from '../../consts/terms/dayInitials';
import soundFiles from '../../consts/terms/soundFiles';
import WindChimes from '../../assets/sounds/118979__esperri__windchimes-2.wav';

const AddAlarm = (): React.FC => {
    const useStyles = makeStyles((theme) => ({
        dayButton: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
        dayButtonSelected: {
            background: theme.palette.action.selected,
        },
    }));

    const [selectedTime, setSelectedTime] = useState(DateTime.now());
    const [selectedDays, setSelectedDays] = useState([]);
    const [soundName, setSoundName] = useState('');
    const [soundFile, setSoundFile] = useState(null);

    const toggleDaySelection = (day: number) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter((d) => d !== day));
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };

    const handleChangeSoundFile = (event) => {
        setSoundFile(Object.values(soundFiles).find((s) => s.name === event.target.value)?.file);
        setSoundName(event.target.value);
    };

    const getSound = (name: string) => {
        switch (name) {
            case 'WindChimes':
                return WindChimes;
            default:
                return WindChimes;
        }
    };

    const classes = useStyles();

    return (
        <Grid
            container
            direction="column"
            spacing={2}
        >
            <Grid item>
                <Typography variant="h5">
                    New Alarm
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6">Time</Typography>
                <TimePicker
                    value={selectedTime}
                    onChange={setSelectedTime}
                    fullWidth
                />
            </Grid>
            <Grid item>
                <Typography variant="h6">Repeat</Typography>
                <Grid container justify="space-around">
                    {
                        dayInitials.map((d, i) => (
                            <Grid item key={`${d}${i}`}>
                                <IconButton
                                    className={
                                        selectedDays.includes(i)
                                            ? clsx([classes.dayButton, classes.dayButtonSelected])
                                            : classes.dayButton
                                    }
                                    onClick={() => toggleDaySelection(i)}
                                >
                                    {d}
                                </IconButton>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="h6">Sound</Typography>
                <FormControl fullWidth>
                    <InputLabel id="soundFile-label">Select a Sound</InputLabel>
                    <Select
                        fullWidth
                        value={soundName}
                        onChange={handleChangeSoundFile}
                    >
                        {Object.keys(soundFiles).map((s) => {
                            const fileInfo = soundFiles[s];
                            return <MenuItem key={s} value={fileInfo.name}>{fileInfo.name}</MenuItem>;
                        })}
                    </Select>
                </FormControl>
                {soundFile
                    ? (
                        <ReactAudioPlayer
                            src={getSound(soundFile)}
                            autoPlay
                        />
                    )
                    : null}

            </Grid>
        </Grid>
    );
};

export const AddAlarmPath = '/add-alarm';

export default AddAlarm;
