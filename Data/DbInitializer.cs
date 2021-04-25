using DreamJournal.Models;
using DreamJournal.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DreamJournal.Data
{
    public static class DbInitializer
    {
        public static void Initialize(DreamJournalContext context)
        {
            context.Database.EnsureCreated();

            // Look for any dreams.
            if (context.Dreams.Any())
            {
                return;   // DB has been seeded
            }

            var userGuid = new Guid("64C64D4B-BBE5-4411-AC1F-97217E79B204");

            var person = new Person
            {
                UserGuid = userGuid,
                FirstName = "Guy",
                LastName = "Fakerson",
                RelationshipToUser = RelationshipType.Acquaintence,
                Deceased = false,
                Type = PersonType.Relationship,
                Familiarity = FamiliarityType.CasuallyFamiliar
            };

            var place = new Place
            {
                UserGuid = userGuid,
                Type = PlaceType.Building,
                Name = "Post Office",
                Realism = RealismType.Real
            };

            var lifeEvent = new LifeEvent
            {
                UserGuid = userGuid,
                Type = LifeEventType.Anniversary,
                TimeOfOccurrence = TimeIntervalType.Current,
                Name = "Sent an important letter",
                Description = "I sent a letter to an old friend"
            };

            var dream = new Dream
            {
                UserGuid = userGuid,
                DateIn = DateTime.Now,
                People = new List<Person> { person },
                Emotion  = EmotionType.Afraid,
                Place = place,
                LifeEvent = lifeEvent,
                Description = "I was at the post office and this guy I know from work gave me a weird look as I was sending a letter."
            };

            context.Dreams.Add(dream);
            context.SaveChanges();
        }
    }
}