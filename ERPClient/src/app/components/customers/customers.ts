import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared-module';
import { Http } from '../../services/http';
import { CustomerModel } from '../../models/customer.model';
import { CustomerPipe } from '../../pipes/customer-pipe';
import { NgForm } from '@angular/forms';
import { SwalService } from '../../services/swal';

@Component({
  selector: 'app-customers',
  imports: [SharedModule, CustomerPipe],
  templateUrl: './customers.html',
  styleUrl: './customers.css'
})
export class Customers implements OnInit {
  customers : CustomerModel[] = [];
  search : string = '';

  @ViewChild("createModelCloseBtn") createModelCloseBtn: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild("updateModalCloseBtn") updateModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;

  createModel : CustomerModel = new CustomerModel();
  updateModel : CustomerModel = new CustomerModel();

  constructor(private http: Http,
     private swal : SwalService) {

  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.http.post<CustomerModel[]>("Customers/GetAll",{},(res)=> {
      this.customers = res;
    });
  }

  create(form : NgForm){
    if(form.valid){
      this.http.post<string>('Customers/Create', this.createModel, (res) => {
       this.swal.callToast(res);
       this.createModel = new CustomerModel();
       this.createModelCloseBtn?.nativeElement.click();
       this.getAll();

    });
  }
  }

  deleteById(model: CustomerModel){
    this.swal.callSwal("Müşteri Sil?",`${model.name} müşterisini silmek istiyor musunuz?`,()=> {
      this.http.post<string>("Customers/DeleteById",{id: model.id},(res)=> {
        this.getAll();
        this.swal.callToast(res,"info");
      });
    })
  }

  get(model: CustomerModel){
    this.updateModel = {...model};
  }

  update(form: NgForm){
    if(form.valid){
      this.http.post<string>("Customers/Update",this.updateModel,(res)=> {
        this.swal.callToast(res,"info");
        this.updateModalCloseBtn?.nativeElement.click();
        this.getAll();
      });
    }
  }
}
