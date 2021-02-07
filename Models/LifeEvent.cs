using DreamJournal.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Models
{
    public class LifeEvent
    {
        public LifeEventType Type { get; set; }

        public TimeIntervalType TimeOfOccurrence { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
