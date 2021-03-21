
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace DreamJournal.Data
{
    public static class SQLCommands
    {
        public static DataTable GetRecords(SqlConnection connection, string sql)
        {
            SqlDataReader theData;
            SqlCommand cmd = new SqlCommand();
            try
            {
                cmd.CommandText = sql;
                cmd.CommandType = CommandType.Text;
                cmd.Connection = connection;
                theData = cmd.ExecuteReader();
                DataTable theTable = new DataTable();
                theTable.Load(theData);

                return theTable;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error in GetRecords() : " + ex.Message);

                return null;
            }
        }

        public static void ExecuteSQL(SqlConnection connection, string sql)
        {
            SqlCommand cmd = new SqlCommand();
            try
            {
                cmd.CommandText = sql;
                cmd.CommandType = CommandType.Text;
                cmd.Connection = connection;
                cmd.ExecuteReader();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error in ExecuteSQL() : " + ex.Message);
            }
        }
    }
}
