using Example.Models;
using Example.Repositories;

namespace Example.DataAccess
{
    public class ProductRepository: Repository<Product>, IProductRepository
    {
        public ProductRepository(string connectionString) : base(connectionString)
        {
        }
    }
}
