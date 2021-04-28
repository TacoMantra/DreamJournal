import * as React from 'react';
import { Typography, Grid, IconButton } from '@material-ui/core';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DreamCard from '../dream-card';
import type { IDream } from '../../models/Dream/Dream';
import { AddDreamPath } from './../../Sections/add-dream/AddDream';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const DreamList = ({ dreams }: { dreams: Array<IDream> }): React.FC => (
    <>
        <Grid item container alignItems="center">
            <Grid item container alignItems="center" xs={9}>
                <NightsStayIcon />
                <Typography variant="h5">
                    {' Recent Dreams'}
                </Typography>
            </Grid>
            <Grid item container justify="flex-end" xs={3}>
                <Link to={AddDreamPath} aria-label="Add a new dream">
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </Link>
            </Grid>
        </Grid>
        {dreams.slice(0, 3).map((dream) => (
            <DreamCard
                dateIn={dream.dateIn}
                people={dream.people}
                emotion={dream.emotion}
                place={dream.place}
                key={dream.dateIn}
            />
        ))}
        <IconButton>
            <MoreHorizIcon />
        </IconButton>
    </>
);

export default DreamList;
