using DreamJournal.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Models
{
    public class UserTrends
    {
        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        public int NumDreamsRecorded { get; set; }

        private static int NumFrequenciesToShow { get; set; }

        private static LifeEventType[] LifeEvents { get; set; }

        private static EmotionType[] Emotions { get; set; }

        private static PersonType[] People { get; set; }

        private static PlaceType[] Places { get; set; }

        public Trend<LifeEventType> LifeEventTrend = new Trend<LifeEventType>(LifeEvents, NumFrequenciesToShow);

        public Trend<EmotionType> EmotionTrend = new Trend<EmotionType>(Emotions, NumFrequenciesToShow);

        public Trend<PersonType> PeopleTrend = new Trend<PersonType>(People, NumFrequenciesToShow);

        public Trend<PlaceType> PlacesTrend = new Trend<PlaceType>(Places, NumFrequenciesToShow);

        public UserTrends(
            int numFrequenciesToShow, 
            LifeEventType[] lifeEvents, 
            EmotionType[] emotions, 
            PersonType[] people, 
            PlaceType[] places
        )
        {
            NumFrequenciesToShow = numFrequenciesToShow;
            LifeEvents = lifeEvents;
            Emotions = emotions;
            People = people;
            Places = places;
        }
    }
}
