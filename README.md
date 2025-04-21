This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Notes:

```
  - Next.js is SSR by default, but it also supports CSR (Client Side Rendering) and SSG (Static Site Generation).
  - SSR vs CSR
  - SSR: Server Side Rendering, to make componenets (client or interactive) components, we need to use the "use client" directive at the top of the file.
  - CSR: Client Side Rendering => Hooks, State Management, Events, and other client-side features are available.
  - SSG: Static Site Generation
  - ISR: Incremental Static Regeneration: Caching on revalidate time => categories component.
  - RSC: React Server Components
```

- usePathname(); Is a hook => get the current pathname => (Can use in: Check Active Link).
- useRouter(); Is a hook => Same As Link useing for Navigation Without reloading bu can use with "<button>".
- To ignore folder in routing and you want to hide it in the path in routing => (folderName), But still conatin others folders.
- To make folder out of route => _folderName.

## Learn More

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
