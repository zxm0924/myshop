import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsuesComponent } from './carsues.component';

describe('CarsuesComponent', () => {
  let component: CarsuesComponent;
  let fixture: ComponentFixture<CarsuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
