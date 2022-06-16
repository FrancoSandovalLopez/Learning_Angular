
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    /* Redirect to layout  */
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    /* Redirect to login on page loading by default  */
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    /* Redirect to a 404 page when path isn't valid */
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
