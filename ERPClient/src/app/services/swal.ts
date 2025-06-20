import { Injectable } from '@angular/core';
import SweetAlert from 'sweetalert2';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }


  callToast(title : string, icon : SweetAlertIcon = 'success') {
    Swal.fire({
      title: title,
      text: 'This is an example toast message',
      timer: 3000,
      showConfirmButton: false,
      toast: true,
      position: "bottom-right",
      icon: icon
        });
  }

  callSwal(title : string , text: string, callBack:()=> void, confirmButtonText: string = 'Sil', icon: SweetAlertIcon = 'question') {
    Swal.fire({
      title:title,
      text: text,
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: 'Vazgeç',
      icon: icon
    }).then(res  => {
      if (res.isConfirmed) {
        callBack();
      }
        });
      }
    }
  export type SweetAlertIcon = 'success' | 'error' | 'warning' | 'info' | 'question'