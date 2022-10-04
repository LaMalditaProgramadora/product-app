import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { NewEditProductComponent } from './components/new-edit-product/new-edit-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'business/products', component: ListProductsComponent },
  { path: 'admin/product/new', component: NewEditProductComponent },
  { path: 'admin/product/edit/:id', component: NewEditProductComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
