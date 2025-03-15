/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'company-website',
        title: 'Company Website',
        type: 'collapsable',
        icon: 'heroicons_outline:globe-alt',
        children: [
            {
                id: 'company-website.home-page',
                title: 'Home',
                type: 'basic',
                link: '/company-website/home-page',
            },
            {
                id: 'company-website.work-page',
                title: 'Work',
                type: 'basic',
                link: '/company-website/work-page',
            },
            {
                id: 'company-website.blog-page',
                title: 'Blog',
                type: 'basic',
                link: '/company-website/blog-page',
            },
            {
                id: 'company-website.service-details',
                title: 'Service Details',
                type: 'basic',
                link: '/company-website/service-details',
            },
            {
                id: 'company-website.about-us',
                title: 'About Us',
                type: 'basic',
                link: '/company-website/about-us',
            },
            {
                id: 'company-website.services',
                title: 'Services',
                type: 'basic',
                link: '/company-website/services',
            }
        ],
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'company-website',
        title: 'Company Website',
        type: 'collapsable',
        icon: 'heroicons_outline:globe-alt',
        children: [],
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'company-website',
        title: 'Company Website',
        type: 'collapsable',
        icon: 'heroicons_outline:globe-alt',
        children: [],
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'company-website',
        title: 'Company Website',
        type: 'collapsable',
        icon: 'heroicons_outline:globe-alt',
        children: [],
    },
];
