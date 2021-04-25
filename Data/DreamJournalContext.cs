using DreamJournal.Models;
using DreamJournal.Models.Enums;
using Microsoft.EntityFrameworkCore;
using SpatialFocus.EntityFrameworkCore.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Data
{
    public class DreamJournalContext : DbContext
    {
        public DreamJournalContext(DbContextOptions<DreamJournalContext> options) : base(options)
        {

        }

        public DbSet<Dream> Dreams { get; set; }

        public DbSet<LifeEvent> LifeEvents { get; set; }

        public DbSet<Person> People { get; set; }

        public DbSet<Place> Places { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Create lookup tables for enums
            modelBuilder.ConfigureEnumLookup(
                EnumLookupOptions.Default
                .Singularize()
                .UseNumberAsIdentifier());

            // Singular table names
            modelBuilder.Entity<Dream>().ToTable("Dream");
            modelBuilder.Entity<LifeEvent>().ToTable("LifeEvent");
            modelBuilder.Entity<Person>().ToTable("Person");
            modelBuilder.Entity<Place>().ToTable("Place");
        }
    }
}
