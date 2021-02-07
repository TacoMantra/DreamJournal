using DreamJournal.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Models
{
	public class Person
    {
		public string FirstName { get; set; }

		public string LastName { get; set; }

		public RelationshipType RelationshipToUser { get; set; }
		
		public bool Deceased { get; set; }

		public PersonType Type { get; set; }

		public FamiliarityType Familiarity { get; set; }
	}
}
