# Builders Quick Turn Stack# Create T3 App



This is a Next.js application with TypeScript and tRPC that works without any database dependencies.This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.



## Features## What's next? How do I make an app with this?



- **Frontend**: Next.js 15 with TypeScriptWe try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

- **Backend**: tRPC for API layer

- **Styling**: Tailwind CSS with Radix UI componentsIf you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- **Forms**: React Hook Form with Zod validation

- **Testing**: Vitest for unit and integration tests- [Next.js](https://nextjs.org)

- **Contact Management**: In-memory storage (no database required)- [NextAuth.js](https://next-auth.js.org)

- [Prisma](https://prisma.io)

## Getting Started- [Drizzle](https://orm.drizzle.team)

- [Tailwind CSS](https://tailwindcss.com)

### Prerequisites- [tRPC](https://trpc.io)



- Node.js 18+ and npm## Learn More



### InstallationTo learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:



1. Clone the repository- [Documentation](https://create.t3.gg/)

2. Install dependencies:- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

   ```bash

   npm installYou can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

   ```

## How do I deploy this?

### Development

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

Start the development server:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Building

Build the application for production:
```bash
npm run build
```

### Testing

Run the test suite:
```bash
npm test
```

### Other Scripts

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run typecheck` - Run TypeScript type checking
- `npm run format:check` - Check code formatting
- `npm run format:write` - Format code

## Project Structure

```
src/
├── components/          # Reusable UI components
├── lib/                # Utility functions
├── modules/            # Feature modules
│   ├── common/         # Shared components (Header, Footer)
│   ├── contact/        # Contact form functionality
│   ├── demo/           # Demo page components
│   └── landing/        # Landing page components
├── pages/              # Next.js pages
├── server/             # tRPC server setup
├── styles/             # Global styles
└── utils/              # Utility functions
```

## Architecture

### Contact Management

The application includes a contact form that stores submissions in memory. This provides a working example of form handling and validation without requiring any database setup.

- Contact submissions are validated using Zod schemas
- Duplicate detection is implemented (same email + phone combination)
- All data is stored in memory and will be reset when the server restarts

### API Layer

Uses tRPC for type-safe API calls between frontend and backend:
- Full-stack TypeScript safety
- Automatic serialization/deserialization
- Built-in error handling

## No Database Required

This project has been configured to work without any database dependencies:
- No Prisma or other ORM
- No database connection strings required
- No environment variables for database URLs
- In-memory storage for demonstration purposes

This makes it perfect for:
- Quick prototyping
- Development environments
- Static deployments
- Learning projects

## Deployment

The application can be deployed to any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- Railway
- Any Node.js hosting provider

Since there's no database dependency, deployment is simplified with no additional infrastructure required.