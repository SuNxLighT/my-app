import { Component } from '@angular/core';
import { BookService } from './shared/book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  // constructor(private service: BookService){
  //   this.service.httpBook().subscribe(val=>console.log(val))
  // }
  constructor(){}

  value = 0;
  appMinLabel = 'myAppMinLabel';
  appMaxLabel = 'myAppMaxLabel';
  sqaureHeight = 100;
  sqaureWidth = 250;

  activate: boolean = false;
  appCounter = 20;

  customerList: string[] = ['customer1','customer2','customer3','customer4']  

  bookList = []

  calBuffet(value: string){
    const price = Number(value);
    this.value = (price*3)/4
  }

  testClick(){
    console.log('test EventBinding')
  }
  testNumberChange(value: number){
    console.log('test testNumberChange:' ,value);
  }

  doAppMinChange(value: number){
    console.log('test minChange event:',value)
  }
  doAppMaxChange(value: number){
    console.log('test maxChange event:',value)
  }

  pushCustomer(){
    this.customerList.push('customer'+(this.customerList.length+1));
  }
  unshiftCustomer(){
    this.customerList.unshift('customer'+(this.customerList.length+1));
  }
  removeCustomer(index:number){
    this.customerList.splice(index,1)
  }

  
 
}
