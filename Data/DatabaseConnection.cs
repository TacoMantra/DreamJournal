using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;


namespace DreamJournal.Data
{
    public class DatabaseConnection
    {
        const string sDataSource = "Data Source=(localdb)\\MSSQLLocalDB;Integrated Security=SSPI;Initial Catalog=DreamJournal";

        public SqlConnection dbConn()
        {
            SqlConnection Connection = new SqlConnection();

            try
            {
                Connection.ConnectionString = sDataSource;
                Connection.Open();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error establishing db connection: ", ex.Message);
            }	   

            return Connection;
        }


    }//end dbConn
}
