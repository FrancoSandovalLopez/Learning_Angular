import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, CartComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ HeaderComponent, FooterComponent, CartComponent ]
})
export class SharedModule { }
