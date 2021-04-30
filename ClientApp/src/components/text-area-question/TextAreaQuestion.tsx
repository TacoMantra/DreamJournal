import React, { useState } from 'react';
import {
    Grid, Typography, TextField, Button,
} from '@material-ui/core';

interface ITextAreaQuestionProps {
    question: string;
    onComplete: (string) => void;
    placeholder: string;
    skippable?: boolean;
}

const TextAreaQuestion: React.FC<ITextAreaQuestionProps> = ({
    question, onComplete, skippable = true, placeholder,
}: ITextAreaQuestionProps) => {
    const [value, setValue] = useState(null);

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
                    onChange={setValue}
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
                    Next
                </Button>
            </Grid>
        </Grid>
    );
};

export default TextAreaQuestion;
