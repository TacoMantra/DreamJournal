import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Dream from '../../models/dream';
import Person from '../../models/person';
import Emotion from './screens/Emotion/Emotion';

const AddDream = (): React.FC => {
    const [dream, setDream] = useState(Dream.create());
    return (
        <Emotion />
    );
}

export const AddDreamPath = '/add-dream';

export default AddDream;
