using DreamJournal.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Models
{
    public class LifeEvent
    {
        public int Id { get; set; }

        public Guid UserGuid { get; set; }

        public LifeEventType Type { get; set; }

        public TimeIntervalType TimeOfOccurrence { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
