import DaysOfWeek from '../../consts/enums/daysOfWeek';

export interface IAlarm {
    id: int;
    time: string;
    days: Array<DaysOfWeek>;
    soundFile: string;
}

const create = (args: Partial<IAlarm>): IAlarm => ({
    id: args.id ?? '',
    time: args.time ?? '',
    days: args.days ?? [],
    soundFile: args.soundFile ?? '',
});

const Alarm = { create };

export default Alarm;
