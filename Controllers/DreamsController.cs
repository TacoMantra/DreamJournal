using DreamJournal.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Controllers
{
    public class Dreams : Controller
    {

        [HttpGet]
        public IEnumerable<Dream> GetDreams(string userId)
        {
            // TODO: handle input errors with appropriate status code
            // TODO: entity framework - query for all dreams for user from db
            return new List<Dream>();
        }

        [HttpPost]
        public StatusCodeResult PostDream(Dream dream)
        {
            // TODO: handle input errors with appropriate status code
            // TODO: entity framework - insert dream into db
            return new StatusCodeResult(200);
        }
    }
}
