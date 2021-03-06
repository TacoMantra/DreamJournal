﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Models
{
    public class Alarm
    {
        public TimeSpan Time { get; set; }

        public IEnumerable<DayOfWeek> Days { get; set; }

        public string SoundFile { get; set; }

        public Alarm() { }

        public Alarm(TimeSpan time, IEnumerable<string> dayNames, string soundFile)
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
            Time = time;
            Days = days;
            SoundFile = soundFile;
        }
    }
}
