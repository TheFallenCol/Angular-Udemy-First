using Example.Models;
using Example.Repositories;

namespace Example.DataAccess
{
    public class OrderRepository: Repository<Order>, IOrderRepository
    {
        public OrderRepository(string connectionString) : base(connectionString)
        {
        }
    }
}
