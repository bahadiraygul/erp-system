

using ERPServer.Domain.Entities;
using ERPServer.Infrastructure.Context;
using GenericRepository;

namespace ERPServer.Infrastructure.Repositories;

internal sealed class RecipeRepository : Repository<Recipe, ApplicationDbContext>
{
    public RecipeRepository(ApplicationDbContext context) : base(context)
    {
    }
}
