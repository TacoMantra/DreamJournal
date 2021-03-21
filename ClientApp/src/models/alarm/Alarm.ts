export enum DaysOfWeekAbbreviations {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
}

export interface IAlarm {
    id: int;
    time: string;
    days: Array<DaysOfWeekAbbreviations>;
    soundFile: string;
}

const create = (args: Partial<IAlarm>): IAlarm => ({
    id: args.id ?? '',
    time: args.time ?? new Date(),
    days: args.days ?? [],
    soundFile: args.soundFile ?? '',
});

const Alarm = { create };

export default Alarm;
