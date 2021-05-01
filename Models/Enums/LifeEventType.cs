using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace DreamJournal.Models.Enums
{
    public enum LifeEventType
    {
		Unknown,
		Death,
		Birth,
		Birthday,
		Anniversary,
		[EnumMember(Value = "Relationship milestone")]
		RelationshipMilestone,
		Romantic,
		Conversation,
		Argument,
		[EnumMember(Value = "Developmental milestone")]
		DevelopmentalMilestone,
		Meal,
		Encounter,
		[EnumMember(Value = "Historical event")]
		HistoricalEvent,
		[EnumMember(Value = "Political event")]
		PoliticalEvent,
		Breakup,
		Graduation,
		Move,
		[EnumMember(Value = "Professional milestone")]
		ProfessionalMilestone,
		[EnumMember(Value = "Loss of job")]
		LossOfJob,
		Illness,
		Hospitalization,
		[EnumMember(Value = "Natural disaster")]
		NaturalDisaster,
		Other
	}
}
