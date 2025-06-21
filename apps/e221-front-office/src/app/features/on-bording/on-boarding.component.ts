import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@e221-front-office/shared-ui';
import { Router } from '@angular/router';


@Component({
  selector: 'app-on-boarding',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './on-boarding.component.html',
  styleUrl: './on-boarding.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OnBoardingComponent {
  // injections
  private readonly router: Router = inject(Router);

  // properties


  // methods
  goToSignIn(): void {
    this.router.navigate(['/auth/sign-in']).then();
  }
}
