import {memo} from 'react';
import { Link } from "@remix-run/react";
import "./Header.scss";
import {routeList} from '@/router';

function Header() {
    return (
        <header className={'header__container'}>
            <Link to="/" className={'header__container__logo'}>KKU</Link>
            <nav className="header__container__nav">
                <ul className="header__container__nav__list">
                    {
                        routeList.map(route => (
                            <li key={route.path}>
                                <Link to={route.path}>{route.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
};

export default memo(Header);
