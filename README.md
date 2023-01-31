# Next.js - Tailwind

Build a Single page application using Next.js and Tailwind, deploying it on Vercel

# Next.js App

This project was bootstrapped with [Create next App](https://nextjs.org/learn/basics/create-nextjs-app/setup).

### `npx create-next-app@latest --ts`

## Utils

Next.js provides you:

- Tag Image for images optimizations
- Tag Head / SEO
- CSS & Font Optimizations
- File-System based router
- 3rd-party script integration with different loading strategies
- API Routes cause NodeJS server integrated, api on the same port means no CORS problems
- SSR (server-side rendering) & SSG (static generation) allow us pre-rendering pages
- Styled JSX and other stuff...

## SSG - Static generation
Kind of pre-rendering where pages are generated on Build time
## SSR - Server side rendering
Kind of pre-rendering where pages are generated on each request
# SSR or SSG?
Next.js allows you to decide which pre-rendering mode to use for each page of the application.
You can then create a hybrid webapp that uses SSG for some pages and SSR for others.
It is best to use SSG whenever possible for performance reasons. But how can I know when to use SSG or SSR? You should ask yourself "Is it a problem if I present the user with a pre-rendered page at build time?".
If instead the contents of the page can change very frequently then it is better to use SSR.

## SWR
The team behind Next.js has created a React hook for data fetching called [SWR](https://swr.vercel.app/). We highly recommend it if you’re fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more. We won’t cover the details here, but here’s an example usage:

```
import useSWR from 'swr';
function Profile() {
  const { data, error } = useSWR('/api/user', fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```

# Tailwind

What's tailwind? maybe the soul mate of Next.js
It's a framework that provides you a set of utilities.

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
