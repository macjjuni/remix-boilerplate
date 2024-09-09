import {memo} from 'react';
import "./Footer.scss";

function Footer() {
    return (
        <footer className={'footer__container'}>
            { new Date().getFullYear() }.
        </footer>
    );
};

export default memo(Footer);
