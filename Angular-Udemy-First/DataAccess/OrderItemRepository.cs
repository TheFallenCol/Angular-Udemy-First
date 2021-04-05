using Example.Models;
using Example.Repositories;

namespace Example.DataAccess
{
    public class OrderItemRepository: Repository<OrderItem>, IOrderItemRepository
    {
        public OrderItemRepository(string connectionString) : base(connectionString)
        {
        }
    }
}
