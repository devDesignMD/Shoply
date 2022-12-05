import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('src/app/layouts/auth/auth.component').then(
        (m) => m.AuthComponent
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('src/app/pages/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AuthRouterModule {}
