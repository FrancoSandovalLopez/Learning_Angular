import { LayoutLoginComponent } from './views/account/layout-login/layout-login.component';
import { LayoutComponent } from './layouts/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path: 'Home', 
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule),
      }
    ]
  }
  ,
  {
    path: 'Account',
    component: LayoutLoginComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/account/account.module').then(x => x.AccountModule)
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
