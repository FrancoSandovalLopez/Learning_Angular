import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ColletionsRoutingModule } from './colletions-routing.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ColletionsRoutingModule,
    RouterModule,
    MaterialModule
  ]
})
export class ColletionsModule { }
