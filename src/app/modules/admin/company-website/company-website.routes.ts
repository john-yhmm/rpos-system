import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

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
        path: 'service-details',
        component: ServiceDetailsComponent,
    }
] as Routes;
