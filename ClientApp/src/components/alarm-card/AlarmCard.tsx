import {
  makeStyles, Card, Typography, Grid, IconButton, Icon,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';

type DaysOfWeekAbbreviations = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

interface IAlarmCardProps {
  time: string;
  days: Array<DaysOfWeekAbbreviations>;
}

const AlarmCard = ({ time, days }: IAlarmCardProps) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={9}>
          <Typography variant="h5">{time}</Typography>
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
