import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        // Configuration to say that the root page of the store is the products-grid
        path: '',
        pathMatch: 'full',
        redirectTo: 'products/all'
    },
    {
    path: 'products/:category',
    loadComponent: () => import('./pages/products-grid/products-grid')
    },
    {
    path: 'wishlist',
    loadComponent: () => import('./pages/my-wishlist/my-wishlist')
    }
];
