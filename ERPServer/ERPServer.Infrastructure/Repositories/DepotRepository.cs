

using ERPServer.Domain.Entities;
using ERPServer.Infrastructure.Context;
using GenericRepository;

namespace ERPServer.Infrastructure.Repositories;

internal class DepotRepository : Repository<Depot, ApplicationDbContext>
{
    public DepotRepository(ApplicationDbContext context) : base(context)
    {
    }
}
