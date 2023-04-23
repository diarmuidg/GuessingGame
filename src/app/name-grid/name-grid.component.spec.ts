import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameGridComponent } from './name-grid.component';

describe('NameGridComponent', () => {
  let component: NameGridComponent;
  let fixture: ComponentFixture<NameGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
