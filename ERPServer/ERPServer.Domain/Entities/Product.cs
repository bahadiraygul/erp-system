

using ERPServer.Domain.Abstractions;
using ERPServer.Domain.enums;

namespace ERPServer.Domain.Entities;

public sealed  class Product : Entity
{
    public string Name { get; set; } = string.Empty;
    
    public  ProductTypeEnum Type { get; set; } = ProductTypeEnum.Product;



}
