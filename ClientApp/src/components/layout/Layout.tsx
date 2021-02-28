import * as React from 'react';
import { makeStyles, Paper, Container } from '@material-ui/core';

const Layout = (props: { children: React.ReactNode }) => {
  const useStyles = makeStyles((theme: Theme) => ({
    appPaper: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Paper className={classes.appPaper} elevation={3}>
        {props.children}
      </Paper>
    </Container>
  );
};

export default Layout;
