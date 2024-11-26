# TypeScript Setup


## Prerequisites
Before you begin, ensure that you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager): Comes with Node.js

Additionally, install **MongoDB** locally or use a cloud-based instance like MongoDB Atlas.

## Project Setup

### 1. Clone the Repository
First, clone the repository to your local machine:
```bash
git clone <repository-url>
cd tour-and-travel-server
```

### 2. Install Dependencies
Install the required dependencies and development dependencies:
```bash
npm install
```

This will install the following:
- **Express**: Web framework for Node.js
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB
- **CORS**: Middleware for handling cross-origin requests
- **dotenv**: Loads environment variables from a `.env` file

Additionally, it will install the development dependencies for linting and formatting:
- **eslint**: Linter for JavaScript/TypeScript
- **Prettier**: Code formatter
- **TypeScript**: Superset of JavaScript for static typing
- **@types/express**: Type definitions for Express
- **typescript-eslint**: TypeScript integration for ESLint

### 3. Set Up Environment Variables
Create a `.env` file in the root directory of the project and add your environment variables. For example:
```
MONGO_URI=mongodb://localhost:27017/tourandtravel
PORT=5000
```

### 4. TypeScript Configuration
The project is set up to use TypeScript. If you don't already have a `tsconfig.json` file, generate one by running:
```bash
npx tsc --init
```

Ensure the `tsconfig.json` file is properly configured. A basic configuration might look like this:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"]
}
```

### 5. Running the Server
To start the server in development mode, run:
```bash
npm run start
```

This will run the server on the port defined in the `.env` file (default is `5000`).

To start the server with TypeScript compilation in watch mode:
```bash
npm run dev
```

### 6. Linting and Formatting
To check the code for any linting issues:
```bash
npm run lint
```

To automatically fix linting issues:
```bash
npm run lint:fix
```

To format the code using Prettier:
```bash
npm run format
```

## Directory Structure
```plaintext
.
├── src/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── app.ts
│   └── server.ts
├── .env
├── .prettierignore
├── .eslintrc.json
├── tsconfig.json
├── package.json
└── README.md
```

- **src/**: The main source directory for TypeScript files
- **config/**: Database connection, environment variable configurations
- **models/**: Mongoose models
- **routes/**: API routes
- **controllers/**: Route handlers

## Code Configuration and Dependencies

### `package.json` Dependencies:
- **express**: "^4.21.1" - Web framework for routing and server-side logic.
- **mongoose**: "^8.8.2" - Mongoose ORM to interact with MongoDB.
- **cors**: "^2.8.5" - Middleware for enabling Cross-Origin Resource Sharing.

### `package.json` Dev Dependencies:
- **eslint**: "^9.15.0" - JavaScript/TypeScript linter for ensuring code quality.
- **prettier**: "^9.1.0" - Code formatter.
- **typescript-eslint**: "^8.15.0" - TypeScript support for ESLint.
- **@types/express**: "^5.0.0" - TypeScript types for Express.

### `scripts` in `package.json`:
- **lint**: Runs `eslint` to check for issues in the `src` folder, ignoring `.js` and `.ts` files.
- **lint:fix**: Fixes linting issues automatically using `eslint --fix`.
- **format**: Runs Prettier to format all JavaScript/TypeScript files in the project.
- **test**: A placeholder for tests (currently doesn't run any).





# Further Reading


- **Exploring Design Patterns for Express.js Projects: MVC, Modular, and More**  
  A comprehensive blog on different design patterns for Express.js applications, including MVC, modular, and others.  
  [Read the blog here](https://dev.to/ehtisamhaq/exploring-design-patterns-for-expressjs-projects-mvc-modular-and-more-37lf)

- **Setting Up ESLint and Prettier for Express.js and TypeScript**  
  A blog detailing how to set up ESLint and Prettier for an Express.js project with TypeScript.  
  [Read the blog here](https://dev.to/shafayat/-express-typescript-eslint-prettiersetup-5fhg?fbclid=IwY2xjawGuijdleHRuA2FlbQIxMAABHdid5LBojE340vO0MGfo5QiUeLLNXeN7L2L79ngf63F3-UJpYgFn-5quoA_aem_YQ0-vmhWKv38TWlBWIB5PQ)


