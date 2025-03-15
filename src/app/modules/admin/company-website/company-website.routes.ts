import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WorkPageComponent } from './work/work-page.component';
import { BlogPageComponent } from './blog/blog-page.component';
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
        path: 'work-page',
        component: WorkPageComponent,
    },
    {
        path: 'blog-page',
        component: BlogPageComponent,
    },
    {
        path: 'service-details',
        component: ServiceDetailsComponent,
    }
] as Routes;
