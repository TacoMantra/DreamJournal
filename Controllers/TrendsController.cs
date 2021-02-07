using DreamJournal.Models;
using DreamJournal.Models.Enums;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Controllers
{
    public class TrendsController
    {
        [HttpGet]
        public UserTrends GetTimeFrameTrendsForUser(string userId, DateTime startDate, DateTime endDate, int numFrequenciesToShow)
        {
            // TODO: handle input errors with appropriate status code
            // TODO: entity framework - query for all UserTrends params over time span for user
            var lifeEvents = new List<LifeEventType>();
            var emotions = new List<EmotionType>();
            var people = new List<PersonType>();
            var places = new List<PlaceType>();

            return new UserTrends(numFrequenciesToShow, lifeEvents.ToArray(), emotions.ToArray(), people.ToArray(), places.ToArray());
        }
    }
}
