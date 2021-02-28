export enum PlaceType {
  Unknown = 'Unknown',
  Residence = 'Residence',
  Building = 'Building',
  Store = 'Store',
  PlaceOfWorship = 'Place of worship',
  Courthouse = 'Courthouse',
  School = 'School',
  Jail = 'Jail',
  GovernmentBuilding = 'Government building',
  Library = 'Library',
  Castle = 'Castle',
  CurrentHome = 'Current home',
  PreviousHome = 'Previous home',
  ChildhoodHome = 'Childhood home',
  Road = 'Road',
  PathOrTrail = 'Path or trail',
  Garden = 'Garden',
  Yard = 'Yard',
  Field = 'Field',
  Mountain = 'Mountain',
  Forest = 'Forest',
  Desert = 'Desert',
  Island = 'Island',
  Ocean = 'Ocean',
  LakeOrPond = 'Lake or pond',
  River = 'River',
  Void = 'Void',
  Heaven = 'Heave',
  Hell = 'Hell',
  Purgatory = 'Purgatory',
  Other = 'Other',
}

export enum RealismType {
  Unknown = 'Unknown',
  Real = 'Real',
  Imaginary = 'Imaginary',
  Mixed = 'Mixed',
  Other = 'Other',
}

export interface IPlace {
  type: PlaceType;
  name: string;
  realism: RealismType;
}

const create = (args: Partial<IPlace>): IPlace => ({
  type: args.type ?? PlaceType.Unknown,
  name: args.name ?? '',
  realism: args.realism ?? RealismType.Unknown,
});

const Place = {
  create,
};

export default Place;
