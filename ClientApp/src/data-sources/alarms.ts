import axios from 'axios';
import { DateTime } from 'luxon';
import Alarm, { IAlarm } from '../models/alarm/Alarm';
import DaysOfWeek from '../consts/enums/daysOfWeek';

const fetchAlarms = async (userId: string): Promise<IAlarm> => {
    const response = await axios.get(`alarms/${userId}`);

    return response.data.map((a) => Alarm.create({
        id: a.id,
        time: DateTime.fromISO(a.time).toLocaleString(DateTime.TIME_SIMPLE),
        days: a.days.map((d) => DaysOfWeek[d]),
        soundFile: a.soundFile,
    }));
};

const createAlarm = async (userId: string, alarm: IAlarm): Promise<AxiosResponse<unknown>> => {
    const response = await axios.post(`alarms/create/${userId}`, alarm);
    return response;
};

const deleteAlarm = async (alarmId: number): Promise<AxiosResponse<unknown>> => {
    const response = await axios.post(`alarms/delete/${alarmId}`);
    return response;
};

export { fetchAlarms, createAlarm, deleteAlarm };
