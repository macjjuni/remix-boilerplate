import {Form, useLoaderData} from '@remix-run/react';
import { LoaderFunction, redirect } from "@remix-run/node";
import {useNavigate} from '@remix-run/react';

import '@/styles/pages/archive.scss';

interface PostType {
    userId: string;
    id: number;
    title: string;
    body: string;
}

function hasLeadingOrTrailingWhitespace(str: string): boolean {
    return str !== str.trim();
}

export async function loader({request}: LoaderFunction) {
    const { searchParams, pathname } = new URL(request.url);
    const searchParam = searchParams.get("search");

    // 앞뒤 공백 처리
    if (searchParam) {
        const istrim = hasLeadingOrTrailingWhitespace(searchParam);

        if (istrim) { return redirect(`${pathname}?search=${searchParam.trim()}`); }
    }

    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) as PostType[] || [];

    // 검색 필터링
    if (!searchParam) {
        return posts;
    }

    return posts.filter(post => post.title.includes(searchParam));
}

// export async function action() {
//     return {response: 'ok'};
// }


export default function Archive() {

    const navigate = useNavigate();
    const posts = useLoaderData<PostType[]>();

    const onSubmit = (e) => {
        e.preventDefault();
        const searchParams = new URLSearchParams();
        const searchValue = e.target[0].value;
        searchParams.append('search', searchValue.trim());
        navigate(`/archive/?${searchParams.toString()}`);
    }

    return (
        <div className={'archive__page'}>

            <Form method="get" onSubmit={onSubmit}>
                <input type="text" name={'search'}/>
                <button type="submit">검색</button>
            </Form>


            <div className={'post__list__wrapper'}>
                {
                    posts.map(post => (
                        <article key={post.id} className={'post__container'}>
                            <h3 className={'post__container__title'}>{post.title}</h3>
                            <div className={'post__container__body'}>{post.body}</div>
                        </article>
                    ))
                }
            </div>
        </div>
    );
};
