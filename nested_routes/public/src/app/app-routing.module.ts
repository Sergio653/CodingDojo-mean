import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';


const routes: Routes = [
  { path: 'product', component: ProductComponent, children: [
    {path: 'details/:id', component: ProductdetailComponent }
  ]},
  // { path: '', pathMatch: 'full', redirectTo: '/' },
  // { path: '**',pathMatch: 'full', redirectTo:'/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
