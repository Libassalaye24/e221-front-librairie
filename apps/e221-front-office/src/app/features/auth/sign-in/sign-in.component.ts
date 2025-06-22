import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent, InputComponent } from '@e221-front-office/shared-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignInComponent implements OnInit {
  // injections
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly router: Router = inject(Router);

  // properties
  protected signInForm = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  // hooks
  ngOnInit(): void {
    console.log('SignInComponent initialized');
  }

  // methods
  onSubmit() {
    console.log('Form submitted:', this.signInForm.value);
    this.goToDashboard();
  }

  goToDashboard(): void {
    this.router.navigate(['/dashboard']).then();
  }
}
