import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AakarComponent } from './aakar.component';

describe('AakarComponent', () => {
  let component: AakarComponent;
  let fixture: ComponentFixture<AakarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AakarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AakarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
