import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionspageComponent } from './commissionspage.component';

describe('HomepageComponent', () => {
  let component: CommissionspageComponent;
  let fixture: ComponentFixture<CommissionspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissionspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
