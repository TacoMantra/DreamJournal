import {
  makeStyles, Card, Typography, Grid, IconButton,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import type { IDream } from '../../models/Dream/Dream';
import { EmotionType } from '../../models/dream/Dream';
import { RelationshipType } from '../../models/person/Person';
import { PlacePreposition, PlaceType } from '../../models/place/Place';

type IDreamCard = Pick<IDream, 'dateIn' | 'people' | 'emotion' | 'place'>;

const DreamCard = ({
  dateIn, people, emotion, place,
}: IDreamCard): React.FC => {
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(2, 1),
      padding: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  const description = useMemo(() => {
    // These are needed to iterate over the prepositions by key
    const placeTypeEnumValueIndex = Object.values(PlaceType).indexOf(place.type);
    const placeTypeEnumKey = Object.keys(PlaceType)[placeTypeEnumValueIndex];

    const person = people[0] || null;
    const emotionPhrase = (emotion !== EmotionType.Unknown && emotion !== EmotionType.Other)
      ? `feeling ${emotion.toLowerCase()}`
      : 'dreaming';
    const associationPhrase = person ? 'with' : '';
    const relationshipPhrase = (
      person.relationshipToUser !== RelationshipType.Other
      && person.relationshipToUser !== RelationshipType.Unknown
    )
      ? `your ${person.relationshipToUser.toLowerCase()} `
      : '';
    const personName = person.firstName || '';
    const placePhrase = place ? ` ${PlacePreposition[placeTypeEnumKey]} ${place.type.toLowerCase()}...` : '...';

    return `You were ${emotionPhrase} ${associationPhrase} ${relationshipPhrase} ${personName}${placePhrase}`;
  }, [emotion, people, place]);

  return (
    <Card className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={9}>
          <Typography variant="h6">{DateTime.fromJSDate(dateIn).toLocaleString()}</Typography>
          <Typography>
            {description}
          </Typography>
        </Grid>
        <Grid item container xs={3} justify="flex-end">
          <IconButton>
            <NavigateNextIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default DreamCard;
