import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blank } from '../components/blank/blank';
import { Section } from '../components/section/section';
import { FormsModule } from '@angular/forms';
import { FormValidateDirective } from 'form-validate-angular';



@NgModule({
  declarations: [],
  imports: [
    Blank,Section,
    CommonModule,
    FormsModule,
    FormValidateDirective
  ],
  exports: [
    Blank,
    Section,
    CommonModule,
    FormsModule,
    FormValidateDirective
  ], 
})
export class SharedModule { }
