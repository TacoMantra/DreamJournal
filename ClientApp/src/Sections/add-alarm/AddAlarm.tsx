import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
    Typography, Grid, FormControl, FormControlLabel, Checkbox, FormGroup, FormLabel, FormHelperText,
} from '@material-ui/core';
import { createAlarmForUser } from '../../features/alarms';
import { IAlarm } from '../../models/alarm/Alarm';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

const AddAlarm = (): React.FC => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const {
        handleSubmit,
    } = useForm();

    const onSubmit = useCallback((alarm: IAlarm) => {
        dispatch(createAlarmForUser({
            userId: '64C64D4B-BBE5-4411-AC1F-97217E79B204',
            alarm,
        }));
    }, [dispatch]);

    return (
        <Grid>
            <Typography variant="h5">
                {' Alarms'}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Assign responsibility</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox onChange={handleChange} name="Sunday" />}
                            label="Sunday"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange={handleChange} name="jason" />}
                            label="Jason Killian"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange={handleChange} name="antoine" />}
                            label="Antoine Llorca"
                        />
                    </FormGroup>
                    <FormHelperText>Be careful</FormHelperText>
                </FormControl>
            </form>
        </Grid>

    );
};

export default AddAlarm;
