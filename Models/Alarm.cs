using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Models
{
    public class Alarm
    {
        public User User { get; set; }
        public TimeSpan Time { get; set; }

        public IEnumerable<DayOfWeek> Days { get; set; }

        // TODO: is this typed right? How to store/retrieve?
        public byte[] SoundFile { get; set; }
    }
}
