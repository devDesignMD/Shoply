import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../../components/base/base.module';
import { FormInputComponent } from '../../components/base/form-input/form-input.component';
import { PageRoutes } from '../../ts/enum';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, BaseModule, FormInputComponent,RouterModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor() {}

  get forgotPasswordUrl(): string {
    return PageRoutes.ForgotPassword;

  }

  ngOnInit(): void {}

  login(): void {
    console.log('login');
  }
}
