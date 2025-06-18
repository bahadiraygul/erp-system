import { Pipe, PipeTransform } from '@angular/core';
import { CustomerModel } from '../models/customer.model';

@Pipe({
  name: 'customer'
})
export class CustomerPipe implements PipeTransform {

  transform(value: CustomerModel[], search : string): CustomerModel[] | null {

    if(!search) {
      return value;
    }

    return value.filter(customer => {
      return customer.name.toLowerCase().includes(search.toLowerCase()) ||
              customer.taxDepartment.toLowerCase().includes(search.toLowerCase()) ||
              customer.taxNumber.toLowerCase().includes(search.toLowerCase()) ||
              customer.city.toLowerCase().includes(search.toLowerCase()) ||
              customer.town.toLowerCase().includes(search.toLowerCase()) ||
              customer.fullAddress.toLowerCase().includes(search.toLowerCase());
    }
    );

  }

}
