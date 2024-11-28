# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

1. Converting a monolith to microfrontend

- Understand the Structure: Identify the key modules or features in your monolith (e.g., Dashboard, User Management, Analytics, etc.).
- Identify Boundaries: Decide which parts of the application can work as separate units (e.g., different routes or distinct UI sections).
- Dependency Mapping: Understand shared code (e.g., UI libraries, utilities, or APIs) that might need to be refactored.

2. Define Microfrontend Architecture

Options for Integration:

- Module Federation (Recommended):
  Use tools like Webpack's Module Federation or Vite's plugin to enable runtime module sharing.

- Iframe-based Integration (less common):
  Embed microfrontends using iframes (less - seamless, harder to manage styles).

- Custom Loader:
  Dynamically load microfrontends through script tags (e.g., from a CDN or separate servers).

3. Extract Features into Microfrontends
   Split your monolith into smaller pieces:

- Identify Feature Boundaries: Extract features (e.g., Header, Dashboard, Profile).
  Decouple Components: Refactor components to be self-contained with their own state, styles, and logic.

Example Split:
Feature - Monolith Component Path - Microfrontend
Header - src/components/Header - micro-header
User Management - src/features/UserManagement - micro-user-management
Analytics Dashboard - src/features/Analytics - micro-dashboard
