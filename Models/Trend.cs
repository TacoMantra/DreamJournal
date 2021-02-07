using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Models
{
    public class Trend<T> where T : Enum
    {
        public Dictionary<T, int> MostSelected { get; set; }

        // TODO: need an interpreter for each type T
        // Initial implementation probably a switch statement based on mosed frequent selection.
        // e.g. Case EmotionType.Anger: return "You've been experiencing a lot of anger lately. Do you have an unresolved conflict?"
        public string Interpretation { get; set; }

        public Trend(T[] selections, int numResults)
        {
            var frequencies = new Dictionary<T, int>();

            // Put the key value pairs of selections/frequencies into a dictionary
            foreach (T selection in selections)
            {
                // If it's not there, add it
                if (!frequencies.Keys.Contains(selection))
                {
                    frequencies.Add(selection, 1);
                }
                // Otherwise, increment it
                else
                {
                    frequencies[selection]++;
                }
            }

            // Sort the dictionary by num results and return the top n results
            MostSelected = (Dictionary<T, int>)(from frequency in frequencies orderby frequency.Value descending select frequency).Take(numResults);
        }
    }
}
