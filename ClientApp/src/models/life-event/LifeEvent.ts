export enum LifeEventType {
  Unknown = 'Unknown',
  Death = 'Death',
  Birth = 'Birth',
  Birthday = 'Birthday',
  Anniversary = 'Anniversary',
  RelationshipMilestone = 'Relationship milestone',
  Romantic = 'Romantic',
  Conversation = 'Conversation',
  Argument = 'Argument',
  DevelopmentalMilestone = 'Developmental milestone',
  Meal = 'Meal',
  Encounter = 'Encounter',
  HistoricalEvent = 'Historical event',
  PoliticalEvent = 'Political event',
  Breakup = 'Breakup',
  Graduation = 'Graduation',
  Move = 'Move',
  ProfessionalMilestone = 'Professional milestone',
  LossOfJob = 'Loss of job',
  Illness = 'Illness',
  Hospitalization = 'Hospitalization',
  NaturalDisaster = 'Natural disaster',
  Other = 'Other',
}

export enum TimeIntervalType {
  Unknown = 'Unknown',
  Recent = 'Recent',
  WithinLifetime = 'Within lifetime',
  Childhood = 'Childhood',
  Current = 'Current',
  Historical = 'Historical',
  Ancient = 'Ancient',
  Other = 'Other',
}

export interface ILifeEvent {
  type: LifeEventType;
  timeOfOccurrence: TimeIntervalType;
  name: string;
  description: string;
}

const create = (args: Partial<ILifeEvent>): ILifeEvent => ({
  type: args.type || LifeEventType.Unknown,
  timeOfOccurrence: args.timeOfOccurrence || TimeIntervalType.Unknown,
  name: args.name || '',
  description: args.description || '',
});

const LifeEvent = {
  create,

};

export default LifeEvent;
