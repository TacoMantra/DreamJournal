import {
  Dream, Person, LifeEvent, Place,
} from '../models';
import { RelationshipType, PersonType, FamiliarityType } from '../models/person/Person';
import { EmotionType } from '../models/dream/Dream';
import { PlaceType } from '../models/place/Place';
import { LifeEventType, TimeIntervalType } from '../models/life-event/LifeEvent';

const mockDreams = [
  Dream.create({
    dateIn: new Date(),
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
    place: Place.create({
      type: PlaceType.Hell,
    }),
    lifeEvent: LifeEvent.create({
      type: LifeEventType.Conversation,
      timeOfOccurrence: TimeIntervalType.Recent,
      name: 'Phone call with John',
      description: 'Caught up with my buddy John and talked about religion',
    }),
    description: 'I was in hell with my old friend John reminiscing about the good old days.',
  }),
  Dream.create({
    dateIn: new Date(2021, 2, 14),
    people: [
      Person.create({
        firstName: 'Laura',
        lastName: 'Smith',
        relationshipToUser: RelationshipType.FormerSignificantOther,
      }),
    ],
    emotion: EmotionType.Resentful,
    place: Place.create({
      type: PlaceType.PreviousHome,
    }),
  }),
  Dream.create({
    dateIn: new Date(2021, 1, 27),
    people: [
      Person.create({
        firstName: 'Barbara',
        relationshipToUser: RelationshipType.MotherInLaw,
      }),
    ],
    emotion: EmotionType.Nervous,
    place: Place.create({
      type: PlaceType.Courthouse,
    }),
  }),
];

export default mockDreams;
