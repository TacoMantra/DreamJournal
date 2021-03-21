import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AlarmList from '../../components/alarm-list';
import mockDreams from '../../mocks/dreams';
import DreamList from '../../components/dream-list';
import { AppState } from '../../store/configureStore';
import { fetchAlarmsByUserId } from '../../features/alarms';

const Dashboard = (): React.FC => {
    const dispatch = useDispatch();
    const [hasFetchedAlarms, setHasFetchedAlarms] = useState(false);

    const alarms = useSelector((state: AppState) => state.alarms.entities);

    useEffect(() => {
        if (!hasFetchedAlarms) {
            // TODO: get this id from user context
            dispatch(fetchAlarmsByUserId('64C64D4B-BBE5-4411-AC1F-97217E79B204'));
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
