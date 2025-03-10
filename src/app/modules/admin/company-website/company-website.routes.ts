import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

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
] as Routes;
