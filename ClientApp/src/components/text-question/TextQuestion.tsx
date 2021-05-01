import React, { useState } from 'react';
import {
    Grid, Typography, TextField, Button,
} from '@material-ui/core';

interface ITextQuestionProps {
    question: string;
    onComplete: (string) => void;
    skippable?: boolean;
    label: string;
}

const TextQuestion: React.FC<ITextQuestionProps> = ({
    question, onComplete, skippable = true, label,
}: ITextQuestionProps) => {
    const [value, setValue] = useState(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSubmit = () => {
        onComplete(value);
    };

    return (
        <Grid container spacing={2}>
            <Grid item>
                <Typography variant="h5" component="h2">{question}</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField label={label} onChange={handleChange} fullWidth />
            </Grid>
            {
                skippable && (
                    <Grid>
                        <Button onClick={handleSubmit}>SKIP THIS</Button>
                    </Grid>
                )
            }
            <Grid item container xs={12} direction="row" justify="flex-end">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={!value}
                >
                    Next
                </Button>
            </Grid>
        </Grid>
    );
};

export default TextQuestion;
