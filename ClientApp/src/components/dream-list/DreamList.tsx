import * as React from 'react';
import { Typography, Grid, IconButton } from '@material-ui/core';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DreamCard from '../dream-card';
import type { IDream } from '../../models/Dream/Dream';
import dream from '../../models/dream';

const DreamList = ({ dreams }: { dreams: Array<IDream>}): React.FC => (
  <Grid direction="column">
    <Grid item container alignItems="center">
        <NightsStayIcon />
        <Typography variant="h5">
          {' Recent Dreams'}
        </Typography>
    </Grid>
    {dreams.slice(0, 3).map((dream) => (
        <DreamCard
            dateIn={dream.dateIn}
            people={dream.people}
            emotion={dream.emotion}
            place={dream.place}
        />
    ))}
    <IconButton>
      <MoreHorizIcon />
    </IconButton>
  </Grid>
);

export default DreamList;
