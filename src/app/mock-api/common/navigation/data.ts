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
