import React, { useState } from 'react';
import {
    Grid, Typography, Button, FormControl, RadioGroup, FormControlLabel, Radio,
} from '@material-ui/core';

type RadioAttributes = {
    value: string;
    label: string;
};

interface IRadioGroupQuestionProps {
    question: string;
    options: Array<RadioAttributes>;
    onComplete: (string) => void;
}

const RadioGroupQuestion: React.FC<IRadioGroupQuestionProps> = ({
    question, options, onComplete,
}: IRadioGroupQuestionProps) => {
    const [value, setValue] = useState(null);

    const handleRadioChange = (event: React.FormEvent<HTMLFormElement>) => {
        setValue((event.target as HTMLInputElement).value);
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
                <FormControl component="fieldset">
                    <RadioGroup value={value} onChange={handleRadioChange}>
                        {
                            options.map((o) => (
                                <FormControlLabel key={o.label} value={o.value} control={<Radio />} label={o.label} />
                            ))
                        }
                    </RadioGroup>
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

export default RadioGroupQuestion;
