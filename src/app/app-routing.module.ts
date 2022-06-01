import { ProductComponent } from './views/products/product/product.component';
import { ProductsComponent } from './views/products/products.component';
import { LayoutComponent } from './layouts/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule),
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: '**', 
    redirectTo: '',
    pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
