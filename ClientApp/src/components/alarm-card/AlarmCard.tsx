import {
  makeStyles, Card, Typography, Grid, IconButton,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import { IAlarm } from '../../models/alarm/Alarm';

const AlarmCard = ({ time, days }: IAlarm): React.FC => {
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(2, 1),
      padding: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={9}>
          <Typography variant="h6">{time}</Typography>
          <Typography>
            {days.map((day, i) => {
              if (i < days.length - 1) {
                return `${day}, `;
              }
              return day;
            })}
          </Typography>
        </Grid>
        <Grid item container xs={3} justify="flex-end">
          <IconButton>
            <EditIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AlarmCard;
