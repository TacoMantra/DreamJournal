using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal
{
    public class User
    {
        public int Id { get; set; }

        public Guid UserGuid { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime JoinedDate { get; set; }
    }
}
