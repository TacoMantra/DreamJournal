using DreamJournal.Models.Enums;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Models
{
    public class Place
    {
        public int Id { get; set; }

        public Guid UserGuid { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public PlaceType Type { get; set; }

        public string Name { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public RealismType Realism { get; set; }
    }
}
