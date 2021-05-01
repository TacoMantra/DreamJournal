import React, { useState } from 'react';
import {
    Grid, Typography, TextField, Button,
} from '@material-ui/core';

interface IPersonNameQuestionProps {
    onComplete: (values: { firstName: string, lastName: string }) => void;
}

const PersonNameQuestion: React.FC<IPersonNameQuestionProps> = ({ onComplete }: IPersonNameQuestionProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

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
                <TextField label="First Name" onChange={handleFirstNameChange} value={firstName} fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Last Name" onChange={handleLastNameChange} value={lastName} fullWidth />
            </Grid>
            <Grid>
                <Button onClick={handleSubmit}>SKIP THIS</Button>
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
