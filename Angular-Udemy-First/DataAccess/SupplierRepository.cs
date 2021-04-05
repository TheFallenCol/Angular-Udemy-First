using Example.Models;
using Example.Repositories;

namespace Example.DataAccess
{
    public class SupplierRepository: Repository<Supplier>, ISupplierRepository
    {
        public SupplierRepository(string connectionString) : base(connectionString)
        {
        }
    }
}
