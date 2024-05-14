import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqaure-flex',
  templateUrl: './sqaure-flex.component.html',
  styleUrl: './sqaure-flex.component.css'
})
export class SqaureFlexComponent {

  @Input() divWidth = 200;
  @Input() divHeight = 100;

}
