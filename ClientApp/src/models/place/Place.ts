import * as prepositions from '../../consts/terms/prepositions';

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
    Heaven = 'Heaven',
    Hell = 'Hell',
    Purgatory = 'Purgatory',
    Other = 'Other',
}

export enum PlacePreposition {
    Residence = prepositions.IN_A,
    Building = prepositions.IN_A,
    Store = prepositions.AT_THE,
    PlaceOfWorship = prepositions.IN_A,
    Courthouse = prepositions.IN_A,
    School = prepositions.AT,
    Jail = prepositions.IN,
    GovernmentBuilding = prepositions.IN_A,
    Library = prepositions.AT_THE,
    Castle = prepositions.IN_A,
    CurrentHome = prepositions.IN_YOUR,
    PreviousHome = prepositions.IN_YOUR,
    ChildhoodHome = prepositions.IN_YOUR,
    Road = prepositions.ON_THE,
    PathOrTrail = prepositions.ON_A,
    Garden = prepositions.IN_A,
    Yard = prepositions.IN_THE,
    Field = prepositions.IN_A,
    Mountain = prepositions.ON_A,
    Forest = prepositions.IN_A,
    Desert = prepositions.IN_A,
    Island = prepositions.ON_AN,
    Ocean = prepositions.IN_THE,
    LakeOrPond = prepositions.IN_A,
    River = prepositions.ON_A,
    Void = prepositions.IN_THE,
    Heaven = prepositions.IN,
    Hell = prepositions.IN,
    Purgatory = prepositions.IN,
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
    type: args.type || PlaceType.Unknown,
    name: args.name || '',
    realism: args.realism || RealismType.Unknown,
});

const Place = {
    create,
};

export default Place;
