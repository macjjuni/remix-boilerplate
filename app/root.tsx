import {
    Links,
    Meta,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';
import LayoutContainer from './layout/layoutContainer/LayoutContainer';
import {ReactNode} from 'react';

export function Layout({children}: { children: ReactNode }) {
    return (
        <html lang="ko">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body>
        {children}
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export default function App() {
    return (<LayoutContainer/>);
}
