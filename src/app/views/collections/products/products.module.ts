import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    //ProductComponent
  ]
})
export class ProductsModule { }
