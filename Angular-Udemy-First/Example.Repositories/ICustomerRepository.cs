using System.Collections.Generic;
using Example.Models;

namespace Example.Repositories
{
    public interface ICustomerRepository : IRepository<Customer>
    {
        IEnumerable<Customer> CustomerPagedList(int page, int rows);
    }
}
