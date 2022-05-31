import { ProductComponent } from './../views/products/product/product.component';
import { ProductsComponent } from './../views/products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LayoutComponent,
    ProductsComponent,
    ProductComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    //ProductsComponent
  ]
})
export class LayoutModule { }
