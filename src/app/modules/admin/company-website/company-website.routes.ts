import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WorkPageComponent } from './work/work-page.component';
import { BlogPageComponent } from './blog/blog-page.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
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
    },
    {
        path: 'about-us',
        component: AboutUsComponent,
    },
    {
        path: 'services',
        component: ServicesComponent,
    },
    {
        path: 'contact-us',
        component: ContactUsComponent,
    },
    {
        path: 'member-details',
        component: MemberDetailsComponent,
    },
    {
        path: 'work-details',
        component: WorkDetailsComponent,
    },
] as Routes;
