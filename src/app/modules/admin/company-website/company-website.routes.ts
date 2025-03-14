import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesComponent } from './services/services.component';

export default [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home-page',
    },
    {
        path: 'home-page',
        component: HomePageComponent,
    },
    {
        path: 'services',
        component: ServicesComponent,
    }
] as Routes;
