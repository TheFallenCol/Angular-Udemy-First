using System.Collections.Generic;
using Example.Models;

namespace Example.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        User ValidateUser(string nickname, string password);
    }
}
