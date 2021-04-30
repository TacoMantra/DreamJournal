import React, { useState } from 'react';
import {
    Grid, Typography, TextField, Button,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface IAutocompleteQuestionProps {
    question: string;
    options: Array<string>;
    onComplete: (string) => void;
    label: string;
}

const AutocompleteQuestion: React.FC<IAutocompleteQuestionProps> = ({
    question, options, onComplete, label,
}: IAutocompleteQuestionProps) => {
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
                <Autocomplete
                    fullWidth
                    id="autocomplete"
                    options={options}
                    renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
                    onChange={(event, newValue) => { setValue(newValue); }}
                />
            </Grid>
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

export default AutocompleteQuestion;
