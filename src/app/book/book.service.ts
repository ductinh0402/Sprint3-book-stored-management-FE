import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "./model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly URL_BE = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  getAllBook() {
    return this.http.get<Book[]>(this.URL_BE + 'book/list');
  }


}
