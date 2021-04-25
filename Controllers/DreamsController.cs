using DreamJournal.Data;
using DreamJournal.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Controllers
{
    public class DreamsController : Controller
    {
        // Dependency-inject EF context
        private readonly DreamJournalContext _context;

        public DreamsController(DreamJournalContext context)
        {
            _context = context;
        }

        [HttpGet("{userId}/{take}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<Dream>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult GetDreams(string userId, int take)
        {
            var isValidUserGuid = Guid.TryParse(userId, out var userGuid);

            if (isValidUserGuid)
            {
                var dreams = _context.Dreams.Where(d => d.UserGuid == userGuid).OrderBy(d => d.DateIn).Take(take).ToList();
                return Ok(dreams);
            }

            return BadRequest();
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public IActionResult PostDream(Dream dream)
        {
            _context.Dreams.Add(dream);
            _context.SaveChanges();

            return CreatedAtAction(nameof(PostDream), new { id = dream.Id });
        }
    }
}
