import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

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
        path: 'member-details',
        component: MemberDetailsComponent,
    }
] as Routes;
