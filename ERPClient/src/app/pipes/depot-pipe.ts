import { Pipe, PipeTransform } from '@angular/core';
import { DepotModel } from '../models/depot.model';

@Pipe({
  name: 'depot'
})


export class DepotPipe implements PipeTransform {

  transform(value: DepotModel[], search : string): DepotModel[] {

    if(!search){
      return value;
    }
   
    return value.filter(depot => 
      depot.name.toLowerCase().includes(search.toLowerCase()) ||
      depot.city.toLowerCase().includes(search.toLowerCase()) ||
      depot.town.toLowerCase().includes(search.toLowerCase()) ||
      depot.fullAddress.toLowerCase().includes(search.toLowerCase())

    );
  }
  

}


