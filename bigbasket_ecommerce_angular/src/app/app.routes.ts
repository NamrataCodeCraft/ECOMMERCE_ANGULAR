import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'shop',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'shop',
        component: LandingComponent
    }
    ,
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'category',
                component: CategoriesComponent
            }
        ]
    },

];
