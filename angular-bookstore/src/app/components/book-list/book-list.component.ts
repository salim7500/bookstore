import { Component, OnInit } from '@angular/core';
import {Book} from '../../common/book';
import {BookService} from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-list.grid.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {


  books:Book[];
  currentCatId: number;
  constructor(private bookService:BookService , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(()=>this.listBooks());
  }

  listBooks(){
    const hascategoryId:boolean =this.activatedRoute.snapshot.paramMap.has('id')
    if(hascategoryId){
      this.currentCatId=+this.activatedRoute.snapshot.paramMap.get('id') 
      this.bookService.getBooks(this.currentCatId).subscribe(data => {this.books=data})  
    }
    else{
      this.bookService.getAllBooks().subscribe(data => {this.books=data}) 
    }
    
  }

}
