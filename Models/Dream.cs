using DreamJournal.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Models
{
	public class Dream
	{
		public User User { get; set; }

		public DateTime DateIn { get; set; }

		public IEnumerable<Person> People { get; set; }

		public EmotionType Emotion { get; set; }

		public Place Place { get; set; }

		public LifeEvent LifeEvent{ get; set; }

		public string Description { get; set; }
	}
}
