using DreamJournal.Models.Enums;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Models
{
	public class Person
    {
		public int Id { get; set; }

		public Guid UserGuid { get; set; }

		public string FirstName { get; set; }

		public string LastName { get; set; }

		[JsonConverter(typeof(StringEnumConverter))]
		public RelationshipType RelationshipToUser { get; set; }
		  
		public bool Deceased { get; set; }

		[JsonConverter(typeof(StringEnumConverter))]
		public PersonType Type { get; set; }

		[JsonConverter(typeof(StringEnumConverter))]
		public FamiliarityType Familiarity { get; set; }
	}
}
