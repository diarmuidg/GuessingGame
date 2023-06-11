import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereInTheWorldComponent } from './where-in-the-world.component';

describe('WhereInTheWorldComponent', () => {
  let component: WhereInTheWorldComponent;
  let fixture: ComponentFixture<WhereInTheWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereInTheWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhereInTheWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
