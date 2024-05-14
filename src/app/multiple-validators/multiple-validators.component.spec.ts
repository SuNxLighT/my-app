import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleValidatorsComponent } from './multiple-validators.component';

describe('MultipleValidatorsComponent', () => {
  let component: MultipleValidatorsComponent;
  let fixture: ComponentFixture<MultipleValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultipleValidatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
