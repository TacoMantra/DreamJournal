import React, { useEffect, useState } from 'react';
import AlarmList from '../../components/alarm-list';
import mockDreams from '../../mocks/dreams';
import DreamList from '../../components/dream-list';
import Alarm, { DaysOfWeekAbbreviations } from '../../models/alarm/Alarm';

const Dashboard = (): React.FC => {
  const [alarms, setAlarms] = useState([]);
  const [hasFetchedAlarms, setHasFetchedAlarms] = useState(false);

  const fetchAlarms = async (userId: string) => {
    const response = await fetch(`alarms/${userId}`);
    const data = await response.json();

    const alarmsFromData = data.map((a) => Alarm.create({
      id: a.id,
      time: `${a.time.hours}:${a.time.minutes}`,
      days: a.days.map((d) => DaysOfWeekAbbreviations[d]),
      soundFile: a.soundFile,
    }));

    setAlarms(alarmsFromData);
  };

  useEffect(() => {
    if (!hasFetchedAlarms) {
      // TODO: get this id from user context
      fetchAlarms('64C64D4B-BBE5-4411-AC1F-97217E79B204');
      setHasFetchedAlarms(true);
    }
  }, [hasFetchedAlarms]);

  return (
    <>
      <AlarmList alarms={alarms} />
      <DreamList dreams={mockDreams} />
    </>
  );
};

export default Dashboard;
