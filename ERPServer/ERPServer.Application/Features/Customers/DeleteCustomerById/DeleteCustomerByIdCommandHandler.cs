
using ERPServer.Domain.Entities;
using ERPServer.Domain.Repository;
using GenericRepository;
using MediatR;
using TS.Result;

namespace ERPServer.Application.Features.Customers.DeleteCustomerById;

internal sealed class DeleteCustomerByIdCommandHandler (
    ICustomerRepository customerRepository,
    IUnitOfWork unitOfWork) : IRequestHandler<DeleteCustomerByIdCommand, Result<string>>
{
    public async Task<Result<string>> Handle(DeleteCustomerByIdCommand request, CancellationToken cancellationToken)
    {
       Customer customer = await customerRepository.GetByExpressionAsync(p => p.Id == request.Id, cancellationToken: cancellationToken);
        
        if(customer == null)
        {
            return Result<string>.Failure("Customer not found.");
        }
        customerRepository.Delete(customer);
        await unitOfWork.SaveChangesAsync(cancellationToken);
        return ("Customer deleted successfully.");


    }
}
