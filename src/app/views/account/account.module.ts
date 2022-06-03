import { AccountRoutingModule } from './account-routing.module';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LayoutLoginComponent } from './layout-login/layout-login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LayoutLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    AccountRoutingModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    LayoutLoginComponent
  ]
})
export class AccountModule { }
