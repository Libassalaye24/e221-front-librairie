import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnBoardingComponent } from './on-boarding.component';

describe('OnBordingComponent', () => {
  let component: OnBoardingComponent;
  let fixture: ComponentFixture<OnBoardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnBoardingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OnBoardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
