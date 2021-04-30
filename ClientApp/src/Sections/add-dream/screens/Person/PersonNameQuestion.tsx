import React, { useState } from 'react';
import {
    Grid, Typography, TextField, Button,
} from '@material-ui/core';

interface IPersonNameQuestionProps {
    onComplete: ({ firstName: string, lastName: string }) => void;
}

const PersonNameQuestion: React.FC<IPersonNameQuestionProps> = ({ onComplete }: IPersonNameQuestionProps) => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);

    const handleSubmit = () => {
        onComplete({
            firstName,
            lastName,
        });
    };

    return (
        <Grid container spacing={2}>
            <Grid item>
                <Typography variant="h5" component="h2">{'What\'s their name?'}</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField label="First Name" onChange={setFirstName} fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Last Name" onChange={setLastName} fullWidth />
            </Grid>
            <Grid>
                <Button onClick={handleSubmit}>{'I DON\'T KNOW, SKIP THIS'}</Button>
            </Grid>
            <Grid item container xs={12} direction="row" justify="flex-end">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={!firstName && !lastName}
                >
                    Next
                </Button>
            </Grid>
        </Grid>
    );
};

export default PersonNameQuestion;
