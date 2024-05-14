import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiple-validators',
  templateUrl: './multiple-validators.component.html',
  styleUrl: './multiple-validators.component.css'
})
export class MultipleValidatorsComponent {
  emailForm = new FormControl(null, [Validators.required,Validators.email]);
}
