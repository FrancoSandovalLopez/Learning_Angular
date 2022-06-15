import { ColletionsModule } from '../views/collections/colletions.module';
import { AccountModule } from '../views/account/account.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
      LayoutComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule, 
    AccountModule,
    ColletionsModule
  ],
  exports: [
  ]
})
export class LayoutModule { }
