using ERPServer.Domain.Entities;
using ERPServer.Domain.Repositories;
using GenericRepository;
using MediatR;
using TS.Result;

namespace ERPServer.Application.Features.Recipes.CreateRecipe
{
    internal sealed class CreateRecipeCommandHandler(IRecipeRepository recipeRepository,
        IUnitOfWork unitOfWork) : IRequestHandler<CreateRecipeCommand, Result<string>>
    {
        public async Task<Result<string>> Handle(CreateRecipeCommand request, CancellationToken cancellationToken)
        {
            bool isRecipeExists = await recipeRepository.AnyAsync(x => x.ProductId == request.ProductId, cancellationToken);

            if (isRecipeExists)
            {
                return Result<string>.Failure("Recipe already exists for this product.");
            }

            Recipe recipe = new Recipe
            {
                ProductId = request.ProductId,
                RecipeDetails = request.Details.Select(detail => 
                new RecipeDetail
                {
                    ProductId = detail.ProductId,
                    Quantity = detail.Quantity
                }).ToList()
            };

            await recipeRepository.AddAsync(recipe, cancellationToken);
            await unitOfWork.SaveChangesAsync(cancellationToken);

            return "Recipe created successfully.";
        }
    }
}
