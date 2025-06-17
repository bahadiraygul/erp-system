import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../constans';
import { ResultModel } from '../models/result.model';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root'
})
export class Http {

  constructor(
    private http : HttpClient,
    private auth : Auth
  ) { }


  post<T>(apiUrl: string, body : string, callBack:(res : T) => void, errorCallBack? : () => void) {
    this.http.post<ResultModel<T>>(`${api}/${apiUrl}`, body,{
      headers: {
        "Authorization": "Bearer " + this.auth.token,
      }
    }).subscribe({
      next:(res) => {
        if(res.data) {
          callBack(res.data);
        }
      },
      error:(err : HttpErrorResponse) => {
        if (errorCallBack) {
          errorCallBack();
        }
      }
    })
  }
}
