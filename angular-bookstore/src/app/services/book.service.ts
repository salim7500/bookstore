import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Book} from '../common/book'
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrlAllBooks="http://localhost:8082/api/v1/books?size=99";
  private baseUrl="http://localhost:8082/api/v1/books";
  constructor(private httpclient: HttpClient) { }

  getAllBooks():Observable<Book[]>{
    return this.httpclient.get<GetResponseBooks>(this.baseUrlAllBooks).pipe(map(response => response._embedded.books));
  }
  getBooks(curentCat:number):Observable<Book[]>{
    const searchUrl=this.baseUrl+'/search/categoryId?id='+curentCat;
    const testUrl='${this.baseUrl}/search/categoryId?id=${this.curentCat}'
    return this.httpclient.get<GetResponseBooks>(searchUrl).pipe(map(response => response._embedded.books));
  }
}

interface GetResponseBooks{
  _embedded:{
    books: Book[];
  }
}
