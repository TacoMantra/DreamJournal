import type { IPerson } from '../person/Person';
import type { IPlace } from '../place/Place';
import type { ILifeEvent } from '../life-event/LifeEvent';

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
  place: IPlace | null;
  lifeEvent: ILifeEvent | null;
  description: string;
}

const create = (args: Partial<IDream>): IDream => ({
  dateIn: args.dateIn || new Date(),
  people: args.people || [],
  emotion: args.emotions || EmotionType.Unknown,
  place: args.place || null,
  lifeEvent: args.lifeEvent || null,
  description: args.description || '',
});

const Dream = {
  create,
};

export default Dream;
