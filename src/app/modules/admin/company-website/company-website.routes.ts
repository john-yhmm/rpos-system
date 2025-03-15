import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WorkPageComponent } from './work/work-page.component';

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
        path: 'work-page',
        component: WorkPageComponent,
    },

] as Routes;
