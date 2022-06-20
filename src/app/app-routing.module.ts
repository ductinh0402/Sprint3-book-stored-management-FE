import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from "./body/body.component";
import {BookRoutingModule} from "./book/book-routing.module";
import {CardRoutingModule} from "./card/card-routing.module";


const routes: Routes = [
  {
    path: "",component : BodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BookRoutingModule,CardRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
