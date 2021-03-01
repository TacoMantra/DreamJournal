import * as React from 'react';
import AlarmList from '../../components/alarm-list';
import mockAlarms from '../../mocks/alarms';
import mockDreams from '../../mocks/dreams';
import DreamList from '../../components/dream-list';

const Dashboard = (): React.FC => (
  <>
    <AlarmList alarms={mockAlarms} />
    <DreamList dreams={mockDreams} />
  </>
);

export default Dashboard;
