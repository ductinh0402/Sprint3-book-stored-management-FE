import { Component, OnInit } from '@angular/core';
import {BookService} from "../book/book.service";
import {Book} from "../book/model/book";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
   bookList: Book[]
  private totalPagination: any;
  constructor(private bookService: BookService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  this.bookService.getAllBook().subscribe(data=>{

    this.bookList = data['content'];
    console.log(this.bookList)
    this.totalPagination = data['totalPages'];
  },error => {
    this.snackBar.open("Tìm kiếm thất bại!", "OK", {duration: 2000})
  })
   }

}
