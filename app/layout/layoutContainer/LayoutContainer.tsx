import {Header, Content, Footer} from '@/layout';
import {Outlet} from '@remix-run/react';
import "./LayoutContainer.scss";


export default function LayoutContainer() {
    return (
        <main className={'layout__container'}>
            <Header/>
            <Content>
                <Outlet />
            </Content>
            <Footer/>
        </main>
    );
};
