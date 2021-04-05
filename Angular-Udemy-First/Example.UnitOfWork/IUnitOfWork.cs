﻿using Example.Repositories;

namespace Example.UnitOfWork
{
    public interface IUnitOfWork
    {
        ICustomerRepository Customer { get; }
        IOrderItemRepository OrderItem { get; }
        IOrderRepository Order { get; }
        IProductRepository Product { get; }
        ISupplierRepository Supplier { get; }
        IUserRepository User { get; }
    }
}
