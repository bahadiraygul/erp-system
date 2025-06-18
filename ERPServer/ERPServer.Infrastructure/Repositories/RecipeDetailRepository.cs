

using ERPServer.Domain.Entities;
using ERPServer.Infrastructure.Context;
using GenericRepository;

namespace ERPServer.Infrastructure.Repositories;

internal sealed class RecipeDetailRepository : Repository<RecipeDetail, ApplicationDbContext>
{
    public RecipeDetailRepository(ApplicationDbContext context) : base(context)
    {
    }
}