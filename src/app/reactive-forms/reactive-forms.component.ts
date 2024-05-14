import { Component } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  bmi = 0;
  info = '';

  // weightForm = new FormControl(0,Validators.required);
  // heightForm = new FormControl(0,Validators.required);
  weightForm = new FormControl();
  heightForm = new FormControl();

  calculate(){
    if(this.weightForm.invalid || this.heightForm.invalid){
      return;
    }
    const weight = this.weightForm.value;
    const height = this.heightForm.value;
    console.log('weight',weight);
    console.log('height',height);

   this.bmi = weight / (height**2);
  }
}
