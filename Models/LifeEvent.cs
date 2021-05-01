using DreamJournal.Models.Enums;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
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

        [JsonConverter(typeof(StringEnumConverter))]
        public LifeEventType Type { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public TimeIntervalType TimeOfOccurrence { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
