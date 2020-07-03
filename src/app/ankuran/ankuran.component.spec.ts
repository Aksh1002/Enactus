import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnkuranComponent } from './ankuran.component';

describe('AnkuranComponent', () => {
  let component: AnkuranComponent;
  let fixture: ComponentFixture<AnkuranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnkuranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnkuranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
