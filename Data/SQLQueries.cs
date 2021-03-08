using DreamJournal.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DreamJournal.Data
{
    public static class SQLQueries
    {
        // Generate key/value pairs of alarm id and day for AlarmDays table
        private static string GetAlarmDayPairsString(string alarmId, IEnumerable<int> days)
        {
            var alarmDaysPairs = new List<string>();

            foreach (var day in days)
            {
                alarmDaysPairs.Add($"({alarmId}, {day})");
            }

            return String.Join(", ", alarmDaysPairs);
        }

        // Create
        public static string CreateAlarm(TimeSpan time, string soundFile, string userId, IEnumerable<int> days)
        {
            return $"DECLARE @TempTable TABLE(NewAlarmId INT) DECLARE @NewAlarmId INT;\n" +
                $"INSERT INTO Alarm(Time, SoundFile, UserNum)\n" +
                $"OUTPUT INSERTED.AlarmId INTO @TempTable\n" +
                $"SELECT '{time}', '{soundFile}', U.userNum\n" +
                $"FROM[User] AS U WHERE U.UserGuid = '{userId}'\n" +
                $"SELECT TOP(1) @NewAlarmId = NewAlarmId FROM @TempTable;\n" +
                $"INSERT INTO AlarmDays(AlarmId, Day) VALUES {GetAlarmDayPairsString("@NewAlarmId", days)}\n";
        }

        // Read
        public static string GetAlarms(string userGuid)
        {
            return $"SELECT A.AlarmId, Time, SoundFile, Name as DayOfWeek FROM Alarm AS A " +
                $"LEFT JOIN [User] AS U ON A.UserNum = U.UserNum " +
                $"LEFT JOIN AlarmDays AS AD ON A.AlarmId = AD.AlarmId " +
                $"LEFT JOIN DaysOfWeek AS D ON AD.Day = D.DayId " +
                $"WHERE U.UserGuid = '{userGuid}'";
        }

        // Update
        public static string UpdateAlarm(int alarmId, TimeSpan time, string soundFile, IEnumerable<int> days)
        {
            return $"UPDATE Alarm SET Time = '{time}', SoundFile = '{soundFile}' WHERE AlarmId = {alarmId}\n" +
                $"DELETE FROM AlarmDays WHERE AlarmId = {alarmId}\n" +
                $"INSERT INTO AlarmDays(AlarmId, Day) VALUES {GetAlarmDayPairsString(alarmId.ToString(), days)}";
        }

        // Delete
        public static string DeleteAlarm(int alarmId)
        {
            return $"DELETE FROM Alarm WHERE alarmId = '{alarmId}'";
        }
    }
}