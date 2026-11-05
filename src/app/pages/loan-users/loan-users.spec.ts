import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanUsers } from './loan-users';

describe('LoanUsers', () => {
  let component: LoanUsers;
  let fixture: ComponentFixture<LoanUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanUsers],
    }).compileComponents();

    fixture = TestBed.createComponent(LoanUsers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
