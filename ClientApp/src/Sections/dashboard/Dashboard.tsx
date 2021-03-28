import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AlarmList from '../../components/alarm-list';
import mockDreams from '../../mocks/dreams';
import DreamList from '../../components/dream-list';
import { AppState } from '../../store/configureStore';
import { fetchAlarmsByUserId } from '../../features/alarms';
import mockUserId from '../../consts/mocks/index';

const Dashboard = (): React.FC => {
    const dispatch = useDispatch();
    const [hasFetchedAlarms, setHasFetchedAlarms] = useState(false);

    const alarms = useSelector((state: AppState) => state.alarms.entities);

    useEffect(() => {
        if (!hasFetchedAlarms) {
            // TODO: get this id from user context
            dispatch(fetchAlarmsByUserId(mockUserId));
            setHasFetchedAlarms(true);
        }
    }, [hasFetchedAlarms, dispatch]);

    return (
        <>
            <AlarmList alarms={Object.values(alarms)} />
            <DreamList dreams={mockDreams} />
        </>
    );
};

export default Dashboard;
