using Example.Models;
using Example.Repositories;
using Example.UnitOfWork;

namespace Example.DataAccess
{
    public class ExampleUnitOfWork: IUnitOfWork
    {
        public ICustomerRepository Customer { get; private set; }
        public IOrderItemRepository OrderItem { get; private set; }
        public IOrderRepository Order { get; private set; }
        public IProductRepository Product { get; private set; }
        public ISupplierRepository Supplier { get; private set; }
        public IUserRepository User { get; private set; }

        public ExampleUnitOfWork(string connectionString)
        {
            Customer = new CustomerRepository(connectionString);
            OrderItem = new OrderItemRepository(connectionString);
            Order = new OrderRepository(connectionString);
            Product = new ProductRepository(connectionString);
            Supplier = new SupplierRepository(connectionString);
            User = new UserRepository(connectionString);
        }
    }
}
