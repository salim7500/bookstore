import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Book} from '../common/book'
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl="http://localhost:8082/api/v1/books";
  constructor(private httpclient: HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.httpclient.get<GetResponseBooks>(this.baseUrl).pipe(map(response => response._embedded.books));
  }
}

interface GetResponseBooks{
  _embedded:{
    books: Book[];
  }
}
