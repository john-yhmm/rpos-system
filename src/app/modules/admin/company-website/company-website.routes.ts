import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

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
        path: 'about-us',
        component: AboutUsComponent,
    },
] as Routes;
