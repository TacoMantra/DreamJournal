import Alarm, { DaysOfWeekAbbreviations, IAlarm } from '../models/alarm/Alarm';

const fetchAlarms = async (userId: string): Promise<IAlarm> => {
    const response = await fetch(`alarms/${userId}`);
    const data = await response.json();

    return data.map((a) => Alarm.create({
        id: a.id,
        time: `${a.time.hours}:${a.time.minutes}`,
        days: a.days.map((d) => DaysOfWeekAbbreviations[d]),
        soundFile: a.soundFile,
    }));
};

// TODO: remove after adding more exports
// eslint-disable-next-line import/prefer-default-export
export { fetchAlarms };
