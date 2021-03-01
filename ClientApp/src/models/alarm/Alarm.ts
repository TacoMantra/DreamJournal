export type DaysOfWeekAbbreviations = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export interface IAlarm {
  time: string;
  days: Array<DaysOfWeekAbbreviations>;
}

const create = (args: Partial<IAlarm>): IAlarm => ({
  time: args.time || new Date(),
  days: args.days || [],
});

const Alarm = { create };

export default Alarm;
