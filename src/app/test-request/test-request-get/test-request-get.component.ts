import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from './test-request-get';
import { BookService } from '../../shared/book.service';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrl: './test-request-get.component.css'
})
export class TestRequestGetComponent {
  bookList: Book[] = [];

  constructor(private service: BookService){ 
    this.service.httpBook()
    .subscribe(response=>{
      this.bookList = response;
    })
  }

  // searchBookList(name: string){
  //   this.http.get<Book[]>('https://anapioficeandfire.com/api/books?name='+name)
  //   .subscribe(response=>{
  //     // console.log('response',response);
  //     this.bookList = response;
  //   })
  // }
  
}
