using DreamJournal.Models;
using System;
using System.Collections.Generic;

namespace DreamJournal.Data
{
    public static class SQLQueries
    {
        public static string GetAlarms(string userGuid)
        {
            return $"SELECT A.AlarmId, Time, SoundFile, Name as DayOfWeek FROM Alarm AS A " +
                $"LEFT JOIN [User] AS U ON A.UserNum = U.UserNum " +
                $"LEFT JOIN AlarmDays AS AD ON A.AlarmId = AD.AlarmId " +
                $"LEFT JOIN DaysOfWeek AS D ON AD.Day = D.DayId " +
                $"WHERE U.UserGuid = '{userGuid}'";
        }

        public static string CreateAlarm(TimeSpan time, string soundFile, string userId)
        {
            return $"INSERT INTO Alarm(Time, SoundFile, UserNum )" +
                $"SELECT '{time}', '{soundFile}', U.UserNum " +
                $"FROM[User] AS U WHERE U.UserGuid = '{userId}'";
        }
    }
}