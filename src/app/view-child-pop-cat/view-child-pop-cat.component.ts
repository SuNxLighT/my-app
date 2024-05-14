import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view-child-pop-cat',
  templateUrl: './view-child-pop-cat.component.html',
  styleUrl: './view-child-pop-cat.component.css'
})
export class ViewChildPopCatComponent {
  @ViewChild('popCat', {read:ElementRef}) imageRef?: ElementRef<HTMLImageElement>;

  smallImage(){
    if (this.imageRef!==undefined) {
      const imageElement = this.imageRef.nativeElement;
      imageElement.style.width = '100px'
    }
  }
  mediumImage(){
    if (this.imageRef!==undefined) {
      const imageElement = this.imageRef.nativeElement;
      imageElement.style.width = '175px'
    }
  }
  bigImage(){
    if (this.imageRef!==undefined) {
      const imageElement = this.imageRef.nativeElement;
      imageElement.style.width = '250px'
    }
  }
}
