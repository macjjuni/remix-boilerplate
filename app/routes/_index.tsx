import type { MetaFunction } from "@remix-run/node";
import {useLoaderData} from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {


  return (
      <h1>
        Home page
      </h1>
  );
}
