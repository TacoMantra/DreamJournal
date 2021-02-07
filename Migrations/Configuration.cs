namespace HomeProjectTracker.Migrations
{
    using DreamJournal.Models;
    using System;
    //using System.Data.Entity;
    //using System.Data.Entity.Migrations;
    //using System.Data.Entity.Validation;
    using System.Linq;

    internal sealed class Configuration
    {
        public Configuration()
        {
            // TODO: ef configuration
        }

        protected void Seed()
        {
            try
            {
                // TODO: put initial seed data for EF migrations here
                Console.WriteLine("Seeding initial data...");
            }
            //catch (DbEntityValidationException exception)
            //{
            //    foreach (var error in exception.EntityValidationErrors)
            //    {
            //        var entityName = error.Entry.Entity.GetType().Name;
            //        Console.WriteLine($"Error with entity {0}, attempting to change value from \"{1}\" to \"{2}\"",
            //            entityName,
            //            error.Entry.OriginalValues[entityName],
            //            error.Entry.CurrentValues[entityName]);

            //        if (error.ValidationErrors.Count > 0)
            //        {
            //            Console.WriteLine("The following validation errors were encountered:");
            //            foreach (var validationError in error.ValidationErrors)
            //            {
            //                Console.WriteLine(validationError.ToString());
            //            }
            //        }
            //    }
            //}
            finally
            {
                Console.WriteLine("Migration complete, seed data has been updated.");
            }
        }
    }
}
