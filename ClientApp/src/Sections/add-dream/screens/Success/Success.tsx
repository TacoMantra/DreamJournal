import React from 'react';
import {
    Grid, Typography, Button,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useHistory } from 'react-router-dom';

const TextQuestion: React.FC = () => {
    const history = useHistory();

    return (
        <Grid container justify="center" spacing={2}>
            <Grid item>
                <Typography variant="h5" component="h2">Success!</Typography>
            </Grid>
            <Grid item container xs={12} direction="row" justify="center">
                <CheckCircleIcon fontSize="large" />
            </Grid>
            <Grid item>
                <Button startIcon={<ArrowBackIcon />} onClick={() => history.push('/')}>Back To Dashboard</Button>
            </Grid>
        </Grid>
    );
};

export default TextQuestion;
