import axios from 'axios';
import Dream, { IDream } from '../models/dream/Dream';

const fetchDreams = async (userId: string): Promise<IDream> => {
    const response = await axios.get(`dreams/${userId}/${take}`);

    return response.data.map((d) => Dream.create({
        id: d.id,
        dateIn: d.dateIn,
        people: d.people,
        place: d.place,
        lifeEvent: d.lifeEvent,
    }));
};

const createDream = async (userId: string, dream: IDream): Promise<AxiosResponse<unknown>> => {
    const dreamPayload = Dream.create({
        ...dream,
        userGuid: userId,
    });
    const response = await axios.post('dreams/create', dreamPayload);
    return response;
};

export { fetchDreams, createDream };
