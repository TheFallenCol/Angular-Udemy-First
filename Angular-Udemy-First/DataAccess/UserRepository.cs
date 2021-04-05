using Dapper;
using Example.Models;
using Example.Repositories;
using System.Data.SqlClient;

namespace Example.DataAccess
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(string connectionString) : base(connectionString)
        {
        }

        public User ValidateUser(string nickname, string password)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@email", nickname);
            parameters.Add("@password", password);

            using (var connection = new SqlConnection(_connectionString))
            {
                return connection.QueryFirstOrDefault<User>(
                    "dbo.ValidateUser",
                    parameters,
                    commandType: System.Data.CommandType.StoredProcedure);
            }
        }
    }
}