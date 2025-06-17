import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared-module';
import { SwalService } from '../../services/swal';

@Component({
  selector: 'app-home',
  imports: [SharedModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private swal : SwalService) {
    this.swal.callSwal("Kaydı Sil", "Bu kaydı silmek istediğinize emin misiniz?", () => {
      alert("Kayıt Silindi");
    });
   }
}
