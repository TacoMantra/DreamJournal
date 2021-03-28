using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Models
{
    public class AlarmEntity : Alarm
    {
        public int Id { get; set; }

        public AlarmEntity(int id, TimeSpan time, IEnumerable<string> dayNames, string soundFile)
        {
            var days = new List<DayOfWeek>();
            foreach (var dayName in dayNames)
            {
                try
                {
                    days.Add((DayOfWeek)Enum.Parse(typeof(DayOfWeek), dayName, true));
                }
                catch
                {
                    Console.WriteLine($"Invalid day of week encountered from data: {dayName}");
                }
            }
            Id = id;
            Time = time;
            Days = days;
            SoundFile = soundFile;
        }
    }
}
