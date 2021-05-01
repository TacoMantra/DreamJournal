import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AlarmList from '../../components/alarm-list';
// import mockDreams from '../../mocks/dreams';
import DreamList from '../../components/dream-list';
import { AppState } from '../../store/configureStore';
import { fetchAlarmsByUserId } from '../../features/alarms';
import mockUserId from '../../consts/mocks/index';
import { fetchDreamsByUserId } from '../../features/dreams';

const Dashboard = (): React.FC => {
    const dispatch = useDispatch();
    const [hasFetchedAlarms, setHasFetchedAlarms] = useState(false);
    const [hasFetchedDreams, setHasFetchedDreams] = useState(false);

    const alarms = useSelector((state: AppState) => state.alarms.entities);
    const dreams = useSelector((state: AppState) => state.dreams.entities);

    useEffect(() => {
        if (!hasFetchedAlarms) {
            // TODO: get this id from user context
            dispatch(fetchAlarmsByUserId(mockUserId));
            setHasFetchedAlarms(true);
        }
        if (!hasFetchedDreams) {
            dispatch(fetchDreamsByUserId(mockUserId));
            setHasFetchedDreams(true);
        }
    }, [hasFetchedAlarms, hasFetchedDreams, dispatch]);

    return (
        <>
            <AlarmList alarms={Object.values(alarms)} />
            <DreamList dreams={Object.values(dreams)} />
        </>
    );
};

export default Dashboard;
