import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Error {

  constructor() { }

  errorHandler(err: HttpErrorResponse){
    console.log(err);

    if (err.status === 0) {
      // A client-side or network error occurred.
      console.error('An error occurred:', err.error);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${err.status}, ` +
        `body was: ${err.error}`);
    }  
  };
  
}
