# Vue 3 + TypeScript + Vite

### Project structure

/assets

- files like images go here

/components

- vue components for visual representation, with minimal state/logic strictly related to the component itself, ideally
  reusable

/composables

- start with `useSomething` - atomic peaces of reusable logic; also could be called hooks

/stores

- encapsulate application state and logic. Can be injected into components which interact with them strictly via
  dedicated methods (actions), the state should be read-only for components.

### Formatting

- we use Prettier for code formatting
- ideally bind to FileSave action in your IDE, or run `npm run format` before commit

### TODO:

- add Axios
- add Keycloak adapter
- add some component library to help us a bit
- add algolia and instasearch
