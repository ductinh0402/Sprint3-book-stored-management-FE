import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { DetailComponent } from './detail/detail.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
  ]
})
export class BookModule { }
