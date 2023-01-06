import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../../components/base/base.module';
import { FormInputComponent } from '../../components/base/form-input/form-input.component';
import { PageRoutes } from '../../ts/enum';
import {Router, RouterModule} from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CredentialsInterface, LoginInterface } from '../../ts/interfaces';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    BaseModule,
    FormInputComponent,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('test@domain.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('1s2ASD3d4@5678', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(128),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  get forgotPasswordUrl(): string {
    return PageRoutes.ForgotPassword;
  }

  ngOnInit(): void {}

  login(): void {
    this.loginForm.markAsTouched();

    if (!this.loginForm.invalid) {
      this.authService.login(<LoginInterface>this.loginForm.value).subscribe({
        next: (credentials: CredentialsInterface) => {
          this.authService.credentials = credentials;
          localStorage.setItem('credentials', JSON.stringify(credentials))
        this.router.navigateByUrl(PageRoutes.Home)
        },

        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
