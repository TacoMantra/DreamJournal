import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    titleLink: {
        color: theme.palette.text.primary,
        textDecoration: 'none',
    },
}));

const AppMenu = (): React.FC => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container maxWidth="sm">
                    <Toolbar>
                        <Link to="/" className={classes.titleLink}>
                            <Grid container alignItems="center">
                                <NightsStayIcon />
                                <Typography variant="h6" className={classes.title}>
                                    Dream Journal
                                </Typography>
                            </Grid>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default AppMenu;
