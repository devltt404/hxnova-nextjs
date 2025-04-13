# Nova Next.js Template

> This project was created using Nova's Next.js template, which integrates the Nova Design System.
>
> For more information about Nova templates, visit
> [Nova Documentation](https://zealous-bay-06c2c6503.5.azurestaticapps.net/?path=/docs/hxnova-templates-readme--docs).

This template provides a minimal setup for creating a new Nova React application using Next.js. It includes:

- [Next.js 14 with App Router](https://nextjs.org/docs/14/getting-started) – Optimized for Server Components, SSR, and
  SSG
- [React 18](https://18.react.dev/) – A modern front-end JavaScript library for building user interfaces based on
  components
- [TypeScript](https://www.typescriptlang.org) – A typed superset of JavaScript designed with large scale applications
  in mind
- [ESLint](https://eslint.org) – Static code analysis to help find problems within a codebase
- [Prettier](https://prettier.io) – An opinionated code formatter
- [React Testing Library](https://testing-library.com) – A very light-weight, best practice first, solution for testing
  React components
- [Vitest](https://vitest.dev) – A blazing fast unit test framework powered by Vite
- [Husky & Lint Staged](https://github.com/typicode/husky#readme) – Run scripts on your staged files before they are
  committed
- [Nova Themes](https://zealous-bay-06c2c6503.5.azurestaticapps.net/?path=/docs/hxnova-themes-readme--docs) – A custom
  PigmentCSS theme for styling Nova applications
- [Nova Components](https://zealous-bay-06c2c6503.5.azurestaticapps.net/?path=/docs/hxnova-themes-readme--docs) – All of
  the essential building blocks for creating a Nova application
- [Nova Icons](https://zealous-bay-06c2c6503.5.azurestaticapps.net/?path=/docs/hxnova-icons-readme--docs) – A utility
  component for rendering Material Symbols or custom Nova icons

## Package Manager

This project is configured to work with any of the following package managers:

### pnpm (Recommended)

```bash
# Install pnpm globally
npm install -g pnpm
```

### npm

```bash
# npm comes with Node.js installation
```

### yarn

```bash
# Install Yarn globally
npm install --global yarn

# Enable corepack and set Yarn version to 4.x
corepack enable
yarn set version 4.x
```

## Getting Started

1. Create a new project using this template:

```bash
npx @hxnova/templates nextjs my-nextjs-app
```

2. Navigate to the project directory:

```bash
cd my-nextjs-app
```

3. Install dependencies:

```bash
# Using pnpm (recommended)
pnpm install

# Using npm
npm install

# Using yarn
yarn install
```

4. Start the development server:

```bash
# Using pnpm (recommended)
pnpm dev

# Using npm
npm run dev

# Using yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm test` - Run tests once
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:ci` - Run tests with coverage in CI mode (generates JUnit XML report)
- `pnpm coverage` - Generate coverage report
- `pnpm lint` - Run ESLint
- `pnpm prettier` - Check code formatting
- `pnpm format` - Format code with Prettier

## Project Structure

```
├── .husky/                         # Git hooks configuration (Husky)
│   ├── pre-commit                   # Pre-commit hook for linting & formatting
├── public/                          # Public assets directory
├── src/                             # Main application source code
│   ├── augment.d.ts                   # TypeScript augmentation declarations
│   ├── tests/                        # Unit test setup & global mocks
│   │   ├── globalMocks.ts              # Global mocks for testing
│   │   └── setupTests.ts               # Vitest setup file
│   ├── components/                   # Reusable UI components
│   │   ├── App.tsx                     # Root component with global context & layout
│   │   ├── Sidebar/                    # Sidebar navigation
│   │   │   ├── Sidebar.test.tsx          # Unit test for Sidebar
│   │   │   └── index.tsx
│   │   ├── ColorScheme/                # Theme & color scheme management
│   │   │   ├── ColorSchemeProvider.tsx
│   │   │   └── ColorSchemeToggleButton.tsx
│   ├── app/                           # Next.js App Router
│   │   ├── favicon.ico                  # Application favicon
│   │   ├── globals.css                   # Global styles
│   │   ├── layout.tsx                    # Root layout component
│   │   ├── loading.tsx                    # Loading state component
│   │   ├── (sidebar)/                     # Sidebar layout with nested routing
│   │   │   ├── layout.tsx
│   │   │   ├── page.styles.ts
│   │   │   └── page.tsx
├── .editorconfig                      # Editor configuration for consistent formatting
├── .eslintignore                       # ESLint ignore file
├── .gitignore                          # Git ignore file
├── .prettierrc                         # Prettier configuration
├── .prettierignore                     # Prettier ignore file
├── README.md                           # Project documentation
├── eslint.config.mjs                   # ESLint configuration
├── next-env.d.ts                       # TypeScript environment definitions for Next.js
├── next.config.mjs                     # Next.js configuration file
├── package.json                         # Project dependencies and scripts
├── tsconfig.json                        # TypeScript configuration
└── vitest.config.ts                     # Vitest configuration for unit testing
```
