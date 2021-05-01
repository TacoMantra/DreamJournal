using DreamJournal.Models.Enums;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Models
{
	public class Dream
	{
		[Key]
		public int Id { get; set; }

		public Guid UserGuid { get; set; }

		public DateTime DateIn { get; set; }

		public ICollection<Person> People { get; set; }

		[JsonConverter(typeof(StringEnumConverter))]
		public EmotionType Emotion { get; set; }

		public Place Place { get; set; }

		public LifeEvent LifeEvent{ get; set; }

		public string Description { get; set; }
	}
}
