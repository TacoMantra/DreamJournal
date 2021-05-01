import React, { useState } from 'react';
import {
    Grid, Typography, TextField, Button,
} from '@material-ui/core';

interface ITextAreaQuestionProps {
    question: string;
    onComplete: (string) => void;
    placeholder: string;
    skippable?: boolean;
    final?: boolean;
}

const TextAreaQuestion: React.FC<ITextAreaQuestionProps> = ({
    question, onComplete, placeholder, skippable = true, final = false,
}: ITextAreaQuestionProps) => {
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
                <TextField
                    multiline
                    fullWidth
                    variant="outlined"
                    rows={6}
                    placeholder={placeholder}
                    onChange={handleChange}
                />
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
                    {final ? 'Save' : 'Next'}
                </Button>
            </Grid>
        </Grid>
    );
};

export default TextAreaQuestion;
