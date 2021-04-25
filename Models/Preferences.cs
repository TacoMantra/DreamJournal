using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Models
{
    public class Preferences
    {
        public Guid UserGuid { get; set; }

        public int SnoozeDurationInMinutes { get; set; }

        // TODO: there have got to be more of these...
    }
}
