using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace DreamJournal.Models.Enums
{
	public enum RelationshipType
	{
		Unknown,
		[EnumMember(Value = "No relationship")]
		NoRelationship,
		Spouse,
		[EnumMember(Value = "Significant other")]
		SignificantOther,
		Fling,
		[EnumMember(Value = "Former significant other")]
		FormerSignificantOther,
		[EnumMember(Value = "Former spouse")]
		FormerSpouse,
		Friend,
		[EnumMember(Value = "Former friend")]
		FormerFriend,
		Acquaintence,
		Rival,
		Colleague,
		Mother,
		Father,
		Brother,
		Sister,
		Uncle,
		Aunt,
		Cousin,
		[EnumMember(Value = "Mother-in-law")]
		MotherInLaw,
		[EnumMember(Value = "Father-in-law")]
		FatherInLaw,
		[EnumMember(Value = "Step-father")]
		StepFather,
		[EnumMember(Value = "Step-mother")]
		StepMother,
		Enemy,
		Other
	}
}