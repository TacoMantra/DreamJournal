import axios from 'axios';
import Alarm, { DaysOfWeekAbbreviations, IAlarm } from '../models/alarm/Alarm';

const fetchAlarms = async (userId: string): Promise<IAlarm> => {
    const response = await axios.get(`alarms/${userId}`);

    return response.data.map((a) => Alarm.create({
        id: a.id,
        time: `${a.time.hours}:${a.time.minutes}`,
        days: a.days.map((d) => DaysOfWeekAbbreviations[d]),
        soundFile: a.soundFile,
    }));
};

const createAlarm = async (userId: string, alarm: IAlarm): Promise<AxiosResponse<unknown>> => {
    const response = await axios.post(`alarms/create/${userId}`, { alarm });
    return response;
};

const deleteAlarm = async (alarmId: number): Promise<AxiosResponse<unknown>> => {
    const response = await axios.post(`alarms/delete/${alarmId}`);
    return response;
};

export { fetchAlarms, createAlarm, deleteAlarm };
