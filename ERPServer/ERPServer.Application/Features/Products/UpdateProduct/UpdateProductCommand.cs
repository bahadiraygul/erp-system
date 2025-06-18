

using AutoMapper;
using ERPServer.Domain.Entities;
using ERPServer.Domain.Repositories;
using GenericRepository;
using MediatR;
using TS.Result;

namespace ERPServer.Application.Features.Products.UpdateProduct;

public sealed record UpdateProductCommand(Guid Id,
    string name,
    int TypeValue) : IRequest<Result<string>>;

internal sealed class UpdateProductCommandHandler(IProductRepository productRepository,
    IUnitOfWork unitOfWork,
    IMapper mapper) : IRequestHandler<UpdateProductCommand, Result<string>>

{
    public async Task<Result<string>> Handle(UpdateProductCommand request, CancellationToken cancellationToken)
    {
        Product product = await productRepository.GetByExpressionAsync(p => p.Id == request.Id, cancellationToken);


        if (product == null)
        {
            return Result<string>.Failure("Product not found.");
        }

        if(product.Name != request.name)
        {
            bool isNameExists = await productRepository.AnyAsync(p => p.Name == request.name, cancellationToken);
            if (isNameExists)
            {
                return Result<string>.Failure("Product with this name already exists.");
            }
        }

        mapper.Map(request, product);

        await unitOfWork.SaveChangesAsync(cancellationToken);

        return "Product updated successfully.";
    }

}