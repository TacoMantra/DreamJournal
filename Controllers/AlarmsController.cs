using DreamJournal.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DreamJournal.Data;
using System.Data;

namespace DreamJournal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlarmsController
    {
        [HttpGet("{userId}")]
        public IEnumerable<Alarm> GetAlarms(string userId)
        {
            var alarmsList = new List<Alarm>();

            DatabaseConnection dbC = new DatabaseConnection();

            try
            {
                // Get all the alarms for user
                using (var alarmsTable = SQLCommands.GetRecords(dbC.dbConn(), SQLQueries.GetAlarms(userId)))
                {
                    // Build a list of alarms from retrieved data
                    foreach (var alarm in alarmsTable.AsEnumerable())
                    {
                        try
                        {
                            var alarmId = alarm.Field<int>("AlarmId");
                            var alarmTime = alarm.Field<TimeSpan>("Time");
                            var soundFile = alarm.Field<string>("SoundFile");
                            var days = new List<string>();

                            // Build the list of days
                            foreach (var a in alarmsTable.AsEnumerable())
                            {
                                if (a.Field<int>("AlarmId") == alarmId)
                                {
                                    days.Add(a.Field<string>("DayOfWeek"));
                                }
                            }

                            // Don't repeat alarms
                            if (!alarmsList.Any(a => a.Id == alarmId))
                            {
                                alarmsList.Add(new Alarm(alarmId, alarmTime, days, soundFile));
                            }
                        }
                        catch (Exception ex)
                        {
                            Console.WriteLine("Invalid alarm detected from data: ", ex.Message);
                        }
                    }
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine("Unable to retrieve alarms from data: ", ex.Message);
            }

            return alarmsList;
        }

        [HttpPost("create/{userId}")]
        public NoContentResult NewAlarm(string userId, [FromBody] Alarm alarm)
        {
            DatabaseConnection dbC = new DatabaseConnection();

            try
            {
                SQLCommands.ExecuteSQL(dbC.dbConn(), SQLQueries.CreateAlarm(userId, alarm));
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error adding alarm for user {userId}: ", ex.Message);
            }
            return new NoContentResult();
        }

        [HttpPost("delete/{alarmId}")]
        public NoContentResult DeleteAlarm(int alarmId)
        {
            DatabaseConnection dbC = new DatabaseConnection();

            try
            {
                SQLCommands.ExecuteSQL(dbC.dbConn(), SQLQueries.DeleteAlarm(alarmId));
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error deleting alarm {alarmId}: ", ex.Message);
            }
            return new NoContentResult();
        }
    }
}
