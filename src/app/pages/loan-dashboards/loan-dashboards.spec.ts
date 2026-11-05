import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanDashboards } from './loan-dashboards';

describe('LoanDashboards', () => {
  let component: LoanDashboards;
  let fixture: ComponentFixture<LoanDashboards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanDashboards],
    }).compileComponents();

    fixture = TestBed.createComponent(LoanDashboards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
