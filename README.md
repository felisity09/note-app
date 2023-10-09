# note-app

This is a simple note app that allows user to create, read, update, delete notes and search for notes by title or content. This application is deployed at [the domain](https://note-app-eight-zeta.vercel.app/). This application doesn't require user authentication and all saved notes are open to public. Please use this application with caution.

This is a application build using React and [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started - Local Development run 

First, connect to the database and generate the Prisma client:

```bash
pnpm i -g vercel # install vercel globally if you don't have it
link vercel
vercel env pull .env

```

Then, run the development server:

```bash
npm install
npm run dev
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Note - This project is created with `npm` but you can use `yarn` or `pnpm` to run the project.

### Branches
- `main` - This is the main branch. It contains the latest code that is deployed to production.
Note that this branch is protected and can not be pushed directly to it. You need to create a PR and get it approved before merging to this branch.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Technology used
This project is built with the following technology:
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
    Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details about deployment.

## Possible Improvement
- [ ] Add unit and integration tests for TDD
- [ ] Add user authentication 
- [ ] Add a `404` page
- [ ] Add a `500` page
- [ ] Update note table to have desire data validation againt title and content. Ex: `title` can not have more than 100 characters or contain special characters, etc. 
- [ ] Add a `loading` or `error` state on all pages
- [ ] Set up different environment for `development`, `staging` and `production`


## Note

- The search feature are applied to both `title` and `content` of the note.
- Tailwind is used for styling. However, CSS is not fully implemented yet

