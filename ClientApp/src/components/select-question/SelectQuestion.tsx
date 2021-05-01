import React, { useState } from 'react';
import {
    Grid, Typography, Button, Select, FormControl, InputLabel, MenuItem,
} from '@material-ui/core';

interface ISelectQuestionProps {
    question: string;
    options: Array<string>;
    onComplete: (string) => void;
    label: string;
}

const SelectQuestion: React.FC<ISelectQuestionProps> = ({
    question, options, onComplete, label,
}: ISelectQuestionProps) => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setValue(event.target.value as string);
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
                <FormControl fullWidth>
                    <InputLabel id="selectQuestionLabel">{label}</InputLabel>
                    <Select
                        fullWidth
                        labelId="selectQuestionLabel"
                        id="selectQuestion"
                        onChange={handleChange}
                        value={value}
                    >
                        {
                            options.map((o) => (
                                <MenuItem key={o} value={o}>{o}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
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

export default SelectQuestion;
