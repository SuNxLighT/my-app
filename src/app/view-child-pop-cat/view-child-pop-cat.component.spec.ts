import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildPopCatComponent } from './view-child-pop-cat.component';

describe('ViewChildPopCatComponent', () => {
  let component: ViewChildPopCatComponent;
  let fixture: ComponentFixture<ViewChildPopCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewChildPopCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewChildPopCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
