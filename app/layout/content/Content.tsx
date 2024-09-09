import {ReactNode} from 'react';
import "./Content.scss";
export default function Content({children}: {children: ReactNode}) {
    return (
        <section className={'content__container'}>
            {children}
        </section>
    );
};
