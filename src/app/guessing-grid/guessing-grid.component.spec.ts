import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessingGridComponent } from './guessing-grid.component';

describe('GuessingGridComponent', () => {
  let component: GuessingGridComponent;
  let fixture: ComponentFixture<GuessingGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessingGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
