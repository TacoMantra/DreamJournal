import { IPerson, IPlace, ILifeEvent } from '../index';

export enum EmotionType {
  Unknown = 'Unknown',
  Sad = 'Sad',
  Afraid = 'Afraid',
  Angry = 'Angry',
  Thoughtful = 'Thoughtful',
  Happy = 'Happy',
  Excited = 'Excited',
  Nostalgic = 'Nostalgic',
  Nervous = 'Nervous',
  Anxious = 'Anxious',
  Jealous = 'Jealous',
  Resentful = 'Resentful',
  Hopeful = 'Hopeful',
  Confused = 'Confused',
  Frustrated = 'Frustrated',
  Aroused = 'Aroused',
  Other = 'Other',
}

export interface IDream {
  dateIn: Date;
  people: Array<IPerson>;
  emotion: EmotionType;
  place: IPlace;
  lifeEvent: ILifeEvent;
  description: string;
}

const create = (args: Partial<IDream>): IDream => ({
  dateIn: args.dateIn ?? new Date(),
  people: args.people ?? [],
  emotion: args.emotions ?? EmotionType.Unknown,
  place: args.places ?? [],
  lifeEvent: args.lifeEvent ?? [],
  description: args.description ?? '',
});

const Dream = {
  create,
};

export default Dream;
