using DreamJournal.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Controllers
{
    public class AlarmsController
    {
        [HttpGet]
        public IEnumerable<Alarm> GetAlarms(string userId)
        {
            // TODO: handle input errors with appropriate status code
            // TODO: entity framework - get user's alarm details from db
            return new List<Alarm>();
        }

        [HttpPost]
        public StatusCodeResult NewAlarm(Alarm alarm)
        {
            // TODO: handle input errors with appropriate status code
            // TODO: entity framework - insert alarm into db
            return new StatusCodeResult(200);
        }
    }
}
