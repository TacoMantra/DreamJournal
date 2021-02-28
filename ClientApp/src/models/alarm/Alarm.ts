export type DaysOfWeekAbbreviations = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export interface IAlarm {
  time: string;
  days: Array<DaysOfWeekAbbreviations>;
}

const create = (args: Partial<IAlarm>): IAlarm => {
  if (!args.time) {
    throw new Error('Missing required property "time" of model "alarm"');
  }

  return {
    time: args.time,
    days: args.days ?? [],
  };
};

const Alarm = { create };

export default Alarm;
