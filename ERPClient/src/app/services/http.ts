import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../constans';
import { ResultModel } from '../models/result.model';
import { Auth } from './auth';
import { Error } from './error';

@Injectable({
  providedIn: 'root'
})
export class Http {

   constructor(
    private http: HttpClient,
    private auth: Auth,
    private error: Error  
  ) { }

  post<T>(apiUrl:string, body:any, callBack:(res:T)=> void,errorCallBack?:()=> void ){
    this.http.post<ResultModel<T>>(`${api}/${apiUrl}`,body,{
      headers: {
        "Authorization": "Bearer " + this.auth.token,
        "Content-Type": "application/json"
      }
    }).subscribe({
      next: (res)=> {
        if(res.data){
          callBack(res.data);
        }        
      },
      error: (err:HttpErrorResponse)=> {
        this.error.errorHandler(err);
        
        if(errorCallBack){
          errorCallBack();
        }
      }
    })
  }
}