using System.Collections.Generic;

namespace DreamJournal.Data
{
    public static class SQLQueries
    {
        public static string GetAlarms(string userGuid)
        {
            return $"SELECT A.AlarmId, Time, SoundFile, Name as DayOfWeek FROM Alarm AS A" +
                $"LEFT JOIN[User] AS U ON A.UserNum = U.UserNum" +
                $"LEFT JOIN AlarmDays AS AD ON A.AlarmId = AD.AlarmId" +
                $"LEFT JOIN DaysOfWeek AS D ON AD.Day = D.DayId" +
                $"WHERE U.UserGuid = {userGuid}";
        }
    }
}