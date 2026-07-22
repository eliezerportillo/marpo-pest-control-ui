# Pest Control Company

Angular 21 starter application for a pest control business UI, scaffolded with Angular CLI best practices and prepared for Firebase integration with Angular Fire 21 release candidate support.

## Prerequisites

- Node.js 24+
- npm 11+

## Development

Install dependencies and start the dev server:

```bash
npm install
npm start
```

The app is available at `http://localhost:4200/`.

## Scripts

- `npm start` - run the Angular development server
- `npm run build` - create a production build
- `npm test` - run unit tests with Vitest

## Angular Fire setup

This project uses `@angular/fire@21.0.0-rc.0` because the stable Angular Fire 21 release is not yet published on npm.

To connect Firebase, update `src/environments/environment.ts` with your Firebase configuration. The app only registers Firebase providers when configuration is present, so the default scaffold remains build-safe without secrets.
