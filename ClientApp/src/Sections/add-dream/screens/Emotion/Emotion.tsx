import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { EmotionType } from '../../../../models/dream/Dream';
import { getEnumStringValues } from '../../../../utils';

const Emotion = (): React.FC => (
    <Grid spacing={2}>
        <Typography variant={'h5'} component={'h2'}>How did the dream make you feel?</Typography>
        <Autocomplete
            id="combo-box-demo"
            options={getEnumStringValues(EmotionType)}
            renderInput={(params) => <TextField {...params} label="Emotion" variant="outlined" />}
        />
    </Grid>
);

export default Emotion;
