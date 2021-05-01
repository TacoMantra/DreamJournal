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
    [ApiController]
    [Route("[controller]")]
    public class DreamsController : Controller
    {
        // Dependency-inject EF context
        private readonly DreamJournalContext _context;

        public DreamsController(DreamJournalContext context)
        {
            _context = context;
        }

        [HttpGet("{userId}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<Dream>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult GetDreams(string userId)
        {
            var isValidUserGuid = Guid.TryParse(userId, out var userGuid);

            if (isValidUserGuid)
            {
                try
                {
                    var dreams = _context.Dreams.Where(d => d.UserGuid == userGuid).OrderBy(d => d.DateIn).ToList();
                    return Ok(dreams);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error retrieving dreams", ex);
                }
            }

            return BadRequest();
        }

        [HttpPost("create")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public IActionResult PostDream(Dream dream)
        {
            try
            {
                _context.Dreams.Add(dream);
                _context.SaveChanges();
                Console.WriteLine("dream posted");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error posting dream:", ex);
            }

            return CreatedAtAction(nameof(PostDream), new { id = dream.DateIn });
        }
    }
}
