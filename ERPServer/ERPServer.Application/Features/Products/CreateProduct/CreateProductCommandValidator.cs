using FluentValidation;

namespace ERPServer.Application.Features.Products.CreateProduct;

public sealed class CreateProductCommandValidator : AbstractValidator<CreateProductCommand>
{
    public CreateProductCommandValidator()
    {
        RuleFor(p => p.Name)
            .NotEmpty().WithMessage("Name is required.")
            .MaximumLength(100).WithMessage("Name must not exceed 100 characters.");
        RuleFor(p => p.TypeValue)
            .InclusiveBetween(0, 10).WithMessage("Type value must be between 0 and 10.");
    }
}