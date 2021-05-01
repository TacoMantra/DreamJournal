import React from 'react';
import {
    Grid, Typography, Button,
} from '@material-ui/core';

interface YesNoQuestionProps {
    question: string;
    onYes: (string) => void;
    onNo: (string) => void;
    skipText?: boolean;
}

const YesNoQuestion: React.FC<YesNoQuestionProps> = ({
    question, onYes, onNo, skipText = true,
}: ITextQuestionProps) => (
    <Grid container spacing={2}>
        <Grid item>
            <Typography variant="h5" component="h2">{question}</Typography>
        </Grid>
        <Grid item container xs={12} direction="row" justify="flex-end">
            <Button onClick={onNo}>{`No${skipText ? ', Skip This' : ''}`}</Button>
            <Button
                variant="contained"
                color="primary"
                onClick={onYes}
                style={{ marginLeft: '24px' }}
            >
                Yes
            </Button>
        </Grid>
    </Grid>
);

export default YesNoQuestion;
