using FluentValidation;

namespace ERPServer.Application.Features.Customers.UpdateCustomer;

public sealed class UpdateCustomerCommandValidator : AbstractValidator<UpdateCustomerCommand>
{
    public UpdateCustomerCommandValidator()
    { 
        RuleFor(c => c.TaxNumber).NotEmpty().WithMessage("Tax Number is required");

    }
}