import { DateTime } from 'luxon';
import { Dream, Person, LifeEvent } from '../models';
import { RelationshipType, PersonType, FamiliarityType } from '../models/person/Person';
import { EmotionType } from '../models/dream/Dream';
import { PlaceType } from '../models/place/Place';
import { LifeEventType, TimeIntervalType } from '../models/life-event/LifeEvent';

const mockDreams = [
  Dream.create({
    dateIn: DateTime.local(2021, 2, 20, 8, 30).toObject,
    people: [
      Person.create({
        firstName: 'John',
        lastName: 'Bradley',
        relationshipToUser: RelationshipType.Friend,
        type: PersonType.Relationship,
        familiarity: FamiliarityType.IntimatelyFamiliar,
      }),
    ],
    emotion: EmotionType.Nostalgic,
    place: PlaceType.Hell,
    lifeEvent: LifeEvent.create({
      type: LifeEventType.Conversation,
      timeOfOccurrence: TimeIntervalType.Recent,
      name: 'Phone call with John',
      description: 'Caught up with my buddy John and talked about religion',
    }),
    description: 'I was in hell with my old friend John reminiscing about the good old days.',
  }),
];

export default mockDreams;
