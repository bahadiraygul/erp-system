using AutoMapper;
using ERPServer.Domain.Entities;
using ERPServer.Domain.Repositories;
using GenericRepository;
using MediatR;
using TS.Result;

namespace ERPServer.Application.Features.Depots.UpdateDepot;

public sealed record UpdateDepotCommand(
    Guid Id,
    string Name,
    string City,
    string Town,
    string FullAddress) : IRequest<Result<string>>;

internal sealed class UpdateDepotCommandHandler(IDepotRepository depotRepository,
    IUnitOfWork unitOfWork,
    IMapper mapper) : IRequestHandler<UpdateDepotCommand, Result<string>>
{
    public async Task<Result<string>> Handle(UpdateDepotCommand request, CancellationToken cancellationToken)
    {
        Depot depot = await depotRepository.GetByExpressionWithTrackingAsync(p => p.Id == request.Id, cancellationToken);

        if (depot is null)
        {
            return Result<string>.Failure("Depot not found.");
        }

        mapper.Map(request, depot);

        await unitOfWork.SaveChangesAsync(cancellationToken);

        return "Depot updated successfully.";
    }
}
