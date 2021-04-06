export enum RelationshipType {
    NoRelationship = 'No relationship',
    Spouse = 'Spouse',
    SignificantOther = 'Significant other',
    Fling = 'Fling',
    FormerSignificantOther = 'Former significant other',
    FormerSpouse = 'Former spouse',
    Friend = 'Friend',
    FormerFriend = 'Former friend',
    Acquaintence = 'Acquaintence',
    Rival = 'Rival',
    Colleague = 'Colleague',
    Mother = 'Mother',
    Father = 'Father',
    Brother = 'Brother',
    Sister = 'Sister',
    Uncle = 'Uncle',
    Aunt = 'Aunt',
    Cousin = 'Cousin',
    MotherInLaw = 'Mother-in-law',
    FatherInLaw = 'Father-in-law',
    StepFather = 'Step-father',
    StepMother = 'Step-mother',
    Enemy = 'Enemy',
    Other = 'Other',
    Unknown = 'Unknown',
}

export enum PersonType {
    Unknown = 'Unknown',
    Relationship = 'Relationship',
    Famous = 'Famous',
    Fictional = 'Fictional',
    Other = 'Other',
}

export enum FamiliarityType {
    Unknown = 'Unknown',
    IntimatelyFamiliar = 'Intimately familiar',
    CasuallyFamiliar = 'Casually familiar',
    FamiliarByReputation = 'Familiar by reputation',
    Famous = "They're Famous",
    Other = 'Other',
}

export interface IPerson {
    firstName: string;
    lastName: string;
    relationshipToUser: relationshipType;
    deceased: boolean;
    type: PersonType;
    familiarity: familiarityType
}

const create = (args: Partial<IPerson>): IPerson => ({
    firstName: args.firstName || '',
    lastName: args.lastName || '',
    relationshipToUser: args.relationshipToUser || RelationshipType.Unknown,
    deceased: args.deceased || false,
    type: args.type || PersonType.Unknown,
    familiarity: args.familiarity || FamiliarityType.Unknown,
});

const Person = {
    create,
};

export default Person;
