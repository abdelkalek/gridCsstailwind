import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListproductsComponent} from "./listproducts/listproducts.component";

const routes: Routes = [
  {path:'',component:ListproductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
