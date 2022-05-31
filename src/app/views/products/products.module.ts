import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';


import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    //ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
  ],
  exports: [
    //ProductComponent
  ]
})
export class ProductsModule { }
