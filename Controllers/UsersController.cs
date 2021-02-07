using DreamJournal.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Controllers
{
    public class UsersController
    {
        [HttpGet]
        public User GetUser(string userId)
        {
            // TODO: handle input errors with appropriate status code
            // TODO: entity framework - get user details from db
            return new User();
        }

        [HttpPost]
        public StatusCodeResult NewUser(User user)
        {
            // TODO: handle input errors with appropriate status code
            // TODO: entity framework - insert user into db
            return new StatusCodeResult(200);
        }
    }
}
