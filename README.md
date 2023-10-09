# note-app

This is a application build using React and [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started - Local Development run 

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Branches
- `main` - This is the main branch. It contains the latest code that is deployed to production.
Note that this branch is protected and can not be pushed directly to it. You need to create a PR and get it approved before merging to this branch.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Technology used
Launguage:
- [TypeScript](https://www.typescriptlang.org/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Frontend:
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)

Backend & Database:
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/) hosted by [Vercel] (https://vercel.com/docs/storage/vercel-postgres)

Deployment:
- [Vercel](https://vercel.com/)

    This project is deployed on [Vercel](https://note-app-eight-zeta.vercel.app/).
    Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details about deployment.

## Possible Improvement
- [ ] Add unit tests for TDD
- [ ] Add a `404` page
- [ ] Add a `500` page
- [ ] Update note table to have desire data validation againt title and content. Ex: `title` can not have more than 100 characters or contain special characters, etc. 
- [ ] Add a `loading` or `error` state on all pages
- [ ] Set up different environment for `development`, `staging` and `production`


## Note
- This project is created with `yarn` but you can use `npm` or `pnpm` to run the project.
- The search feature are applied to both `title` and `content` of the note.
- Tailwind is used for styling. However, CSS is not fully implemented yet

