using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace DreamJournal.Models.Enums
{
    public enum TimeIntervalType
    {
		Unknown,
		Recent,
		[EnumMember(Value = "Within lifetime")]
		WithinLifetime,
		Childhood,
		Current,
		Historical,
		Ancient,
		Other
	}
}
