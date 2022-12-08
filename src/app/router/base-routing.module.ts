import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageErrors } from '../ts/enum';
import {AuthRouterModule} from "./auth-router.module";

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('src/app/layouts/default/default.component').then(
        (m) => m.DefaultComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('src/app/pages/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('src/app/pages/about/about.component').then(
            (m) => m.AboutComponent
          ),
      },
      {
        path: 'products',
        loadComponent: () =>
          import(
            'src/app/pages/products/products-list/products-list.component'
          ).then((m) => m.ProductsListComponent),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('src/app/pages/cart/cart.component').then(
            (m) => m.CartComponent
          ),
      },
      {
        path: 'errors/not-found',
        loadComponent: () =>
          import('src/app/pages/errors/not-found/not-found.component').then(
            (m) => m.NotFoundComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: PageErrors.NotFound,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled' }), AuthRouterModule ],
})
export class BaseRoutingModule {}
