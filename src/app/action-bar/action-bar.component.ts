import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css'
})
export class ActionBarComponent {
  @Input() counter:number = 0;
  @Input() step:number = 1;
  @Output() counterChange = new EventEmitter();
  @Input() inputDisplay = true;

  // constructor(){}
  // ngOnInit(): void{

  // }

  decrease(){
    console.log("Hey decrease!")
    if (this.counter - this.step >=0) {
      // this.counter = this.counter - this.step;
      this.counter -= this.step;
      this.counterChange.emit(this.counter);
    }
   
  }

  increase(){
    console.log("Hey increase!")
    if (this.counter + this.step <=100) {
      // this.counter = this.counter + this.step;
      this.counter += this.step;
      this.counterChange.emit(this.counter);
    }
  }
}
