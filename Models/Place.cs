using DreamJournal.Models.Enums;
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

        public PlaceType Type { get; set; }

        public string Name { get; set; }

        public RealismType Realism { get; set; }
    }
}
