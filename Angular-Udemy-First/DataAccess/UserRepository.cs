using Example.Models;
using Example.Repositories;

namespace Example.DataAccess
{
    public class UserRepository: Repository<User>, IUserRepository
    {
        public UserRepository(string connectionString) : base(connectionString)
        {
        }
    }
}