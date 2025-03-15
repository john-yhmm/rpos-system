import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WorkDetailsComponent } from './work-details/work-details.component';


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
        path: 'work-details',
        component: WorkDetailsComponent,
    },
] as Routes;
