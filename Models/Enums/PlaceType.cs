using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace DreamJournal.Models.Enums
{
    public enum PlaceType
    {
        Unknown,
        Residence,
        Building,
        Store,
        [EnumMember(Value = "Place of worship")]
        PlaceOfWorship,
        Courthouse,
        School,
        Jail,
        [EnumMember(Value = "Government building")]
        GovernmentBuilding,
        Library,
        Castle,
        [EnumMember(Value = "Current home")]
        CurrentHome,
        [EnumMember(Value = "Previous home")]
        PreviousHome,
        [EnumMember(Value = "Childhood home")]
        ChildhoodHome,
        Road,
        [EnumMember(Value = "Path or trail")]
        PathOrTrail,
        Garden,
        Yard,
        Field,
        Mountain,
        Forest,
        Desert,
        Island,
        Ocean,
        [EnumMember(Value = "Lake or pond")]
        LakeOrPond,
        River,
        Void,
        Heaven,
        Hell,
        Purgatory,
        Other
    }
}
