using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace DreamJournal.Models.Enums
{
	public enum FamiliarityType
	{
		Unknown,
		[EnumMember(Value = "Intimately familiar")]
		IntimatelyFamiliar,
		[EnumMember(Value = "Casually familiar")]
		CasuallyFamiliar,
		[EnumMember(Value = "Familiar by reputation")]
		FamiliarByReputation,
		Famous,
		Other
	}
}
