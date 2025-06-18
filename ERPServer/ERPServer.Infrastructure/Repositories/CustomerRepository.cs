
using ERPServer.Domain.Entities;
using ERPServer.Domain.Repository;
using ERPServer.Infrastructure.Context;
using GenericRepository;

namespace ERPServer.Infrastructure.Repository;

internal sealed class CustomerRepository : Repository<Customer, ApplicationDbContext>,ICustomerRepository
{

    public CustomerRepository(ApplicationDbContext context) : base(context)
    {
    }
}
