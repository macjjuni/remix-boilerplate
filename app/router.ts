import {ReactNode} from 'react';

interface RouterType {
    title: string;
    path: string;
    icon?: string | ReactNode;
    isNavigate: boolean;
}

export const routeList: RouterType[] = [
    { title: 'Home', path: '/', isNavigate: true },
    { title: 'Archive', path: '/archive', isNavigate: true },
    { title: 'Resume', path: '/resume', isNavigate: true },
]
