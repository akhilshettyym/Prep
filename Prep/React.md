# REACT JS

---

## 1. <u> React Fundamentals </u> -

## 1. What is React :

- React is an _open-source_ JavaScript library developed by _Facebook (now Meta)_ for building user interfaces (UIs), particularly for _single-page applications (SPAs)_ where fast and interactive experiences are crucial.
- First released in 2013, React allows developers to create reusable UI components that manage their own state and can be composed to form complex interfaces.
- Unlike traditional web development approaches that manipulate the DOM directly, React uses a declarative paradigm, where you describe what the UI should look like based on the application's state, and React handles the underlying updates efficiently.
- At its core, React is not a full-fledged framework but a library focused on the **"view"** layer of an application. It can be integrated with other libraries or frameworks for routing, state management, or API handling (e.g., _React Router for navigation or Redux for global state_).
- React's popularity stems from its **simplicity**, **performance optimizations (like the Virtual DOM)**, and a vast ecosystem of tools and extensions. It's used by major companies like **Netflix**, **Airbnb**, and **Instagram** to build dynamic, responsive web and mobile apps (via React Native).

#### Key features include :

- **Components** : The building blocks of React apps, which can be functional (_stateless_) or class-based (_stateful_).
- **JSX** : A syntax extension that lets you write _HTML-like code within JavaScript_, making UI code more intuitive.
- **State and Props** : Mechanisms for managing data _within_ and _between_ components.
- **Hooks** : Introduced in React 16.8, these allow functional components to use state and lifecycle features without classes (e.g., `useState`, `useEffect`).
- React is maintained by Meta and a large community, with regular updates ensuring compatibility with modern web standards.

---

## 2. Why React :

- React has become one of the most widely adopted front-end technologies due to several compelling advantages that address common pain points in UI development. Here's why developers and organizations choose React:

1. **Performance Efficiency** : React's _Virtual DOM minimizes direct DOM manipulations_, which are costly in terms of _browser performance_. Instead of updating the entire page, React computes the minimal changes needed and applies them, leading to faster rendering and better user experiences in complex apps.
2. **Reusability and Modularity** : With a _component-based_ architecture, you can build encapsulated, reusable pieces of UI. This promotes code reuse across projects, reduces _redundancy_, and makes _maintenance easier_. For example, a `Button` component can be styled and reused throughout an app without rewriting code.
3. **Declarative Programming** : React lets you describe the desired UI state rather than imperatively defining each step to achieve it. This makes code more predictable, easier to debug, and aligns well with how developers think about UIs.
4. **Large Ecosystem and Community** : React has a massive community, resulting in abundant resources like tutorials, libraries (e.g., _Material-UI for pre-built components_), and tools (e.g., _Create React App_ for quick setup). This ecosystem accelerates development and provides solutions for common challenges.
5. **Cross-Platform Capabilities** : Beyond web apps, **React Native** extends React to mobile development, allowing code sharing between web and native apps for _iOS_ and _Android_. This reduces development time for multi-platform projects.
6. **SEO and Server-Side Rendering (SSR)** : With frameworks like _Next.js_, React supports SSR, improving initial load times and SEO by rendering pages on the server before sending them to the client.
7. **Developer Experience** : Features like hot module replacement (via tools like Vite or Webpack) enable fast iteration. React's learning curve is relatively gentle for those familiar with JavaScript, and its unidirectional data flow prevents common bugs in data management.
8. **Scalability** : React scales well for large applications, as seen in production use at scale. It integrates seamlessly with state management solutions like _Redux_ or _Context API_ for handling complex data flows.

- In summary, React is chosen for its balance of simplicity, power, and flexibility, making it ideal for everything from small prototypes to enterprise-level applications. However, it requires additional libraries for full app functionality, which can be a pro (customizability) or con (more setup).

---

## 3. React vs Other Frameworks :

- React is often compared to other front-end frameworks like _Angular_, _Vue.js_, _Svelte_, and _Ember.js_. While React is a library focused on UI rendering, others are more opinionated frameworks with built-in features. Here's a detailed comparison:

1. **React vs Angular**:
   - **Nature**: React is a library; Angular is a full framework from Google with built-in tools for routing, forms, HTTP clients, and dependency injection.
   - **Learning Curve**: React is easier to learn if you know JavaScript, but Angular requires understanding TypeScript, RxJS, and its CLI.
   - **Performance**: React's Virtual DOM is efficient for frequent updates; Angular uses change detection, which can be heavier but optimizes with zones.
   - **Data Binding**: React uses unidirectional flow; Angular supports two-way binding, which can simplify forms but lead to complexity.
   - **Use Case**: Choose React for flexibility in large teams; Angular for enterprise apps needing structure.
   - **Community**: Both are huge, but React has more third-party libraries.

2. **React vs Vue.js**:
   - **Nature**: Vue is a progressive framework, similar to React in being lightweight and component-based, but with more built-in directives.
   - **Syntax**: Vue uses single-file components with HTML templates; React uses JSX, which mixes HTML in JS.
   - **State Management**: Vue has Vuex (similar to Redux); React uses Context or Redux.
   - **Performance**: Both use Virtual DOM, but Vue is often lighter and faster for smaller apps.
   - **Learning Curve**: Vue is gentler for beginners; React scales better for complex apps.
   - **Use Case**: Vue for quick prototypes; React for apps needing a vast ecosystem.

3. **React vs Svelte**:
   - **Nature**: Svelte is a compiler that shifts work to build time, producing vanilla JS without a runtime library.
   - **Performance**: Svelte has no Virtual DOM, leading to smaller bundles and faster runtime; React is more mature for large-scale apps.
   - **Syntax**: Svelte uses a template syntax with reactivity; React requires hooks or classes.
   - **Community**: React's is larger; Svelte's is growing rapidly.
   - **Use Case**: Svelte for performance-critical apps; React for reusability and community support.

4. **React vs Ember.js**:
   - **Nature**: Ember is a batteries-included framework with conventions over configuration.
   - **Features**: Ember has built-in routing and testing; React requires add-ons.
   - **Performance**: React is generally faster due to Virtual DOM; Ember focuses on developer productivity.
   - **Use Case**: Ember for apps following strict patterns; React for custom setups.

- Overall, React excels in flexibility and ecosystem size but may require more boilerplate. Choose based on project needs: React for component-focused, scalable UIs; others for more integrated solutions.

---

## 4. SPA Concepts :

- _Single-Page Applications (SPAs)_ are web apps that load a single HTML page and dynamically update content as the user interacts, without full page reloads. React is commonly used for SPAs due to its efficient rendering.

#### Key concepts include :

1. **Client-Side Rendering (CSR)** : The browser downloads JavaScript, which renders the UI. Initial load might be slower, but interactions are fast. React handles this via components that update based on state changes.
2. **Routing** : SPAs use _client-side routers_ (e.g., React Router) to simulate page navigation. Routes map URLs to components without server requests, using browser history API for _back/forward_ navigation.
3. **State Management** : In SPAs, state can be local (component-specific via `useState`) or global (via Context API or Redux). This ensures data persistence across "pages" without reloads.
4. **API Integration** : SPAs fetch data asynchronously from APIs (e.g., using `fetch` or **Axios**). Loading states, error handling, and caching (e.g., with React Query) are crucial for smooth UX.
5. **Lazy Loading** : To optimize performance, SPAs load components or assets on demand (e.g., React's `lazy` and `Suspense`).
6. **SEO Challenges** : SPAs can suffer from poor SEO since content is JS-rendered. Solutions include SSR (e.g., Next.js) or pre-rendering.
7. **Pros** : Fast interactions, rich UX, less server load.
8. **Cons** : Larger initial bundles, SEO issues, reliance on JS.

- In React SPAs, the app starts with a root component (e.g., `<App />`) that renders child components based on routes and state, creating a seamless experience.

---

## 5. Virtual DOM :

- The **Virtual DOM (VDOM)** is a _lightweight_, _in-memory representation_ of the real DOM (Document Object Model) used by React to optimize UI updates. Instead of directly manipulating the browser's DOM, which is slow due to reflows and repaints, React maintains a virtual tree of elements.

#### How it works :

1. **Initial Render** : React creates a VDOM tree from components and renders it to the real DOM.
2. **State/Props Change** : When data changes, React builds a new VDOM tree reflecting the updates.
3. **Diffing (Reconciliation)** : React compares the new VDOM with the previous one using an efficient algorithm (e.g., identifying changed nodes via keys).
4. **Minimal Updates** : Only the differences (diffs) are applied to the real DOM, reducing operations.

#### Benefits :

- **Performance**: Batches updates and minimizes DOM manipulations.
- **Abstraction**: Developers focus on state, not DOM ops.
- **Cross-Platform**: Enables React Native to map VDOM to native views.
- **Drawbacks**: Slight memory overhead for the VDOM tree. In practice, it's a net gain for dynamic UIs. Fiber (React's reconciliation engine since v16) makes this process interruptible for better responsiveness.

---

## 6. React Architecture :

- React's architecture is **component-centric**, emphasizing modularity and _separation of concerns_. It consists of:

1. **Components** : Reusable units that encapsulate UI logic, styles, and behavior. Functional components use hooks; class components use lifecycle methods.
2. **Props** : Immutable data passed from parent to child components, enabling data flow.
3. **State** : Mutable data managed within a component (e.g., via `useState`). _Changes trigger re-renders_.
4. **Lifecycle** : Phases like mounting (initial render), updating (state/prop changes), and unmounting (removal). Hooks like `useEffect` handle side effects.
5. **Context** : For passing data deeply without prop drilling.
6. **Render Pipeline** : JSX is transpiled to `React.createElement` calls, forming a tree that's reconciled to the DOM.
7. **Higher-Order Components (HOCs) and Render Props** : Patterns for code reuse.
8. **Integration Layers** : React can hook into backends via APIs and use tools like Redux for global state or React Router for navigation.

- This architecture promotes composability, making apps easier to build, test, and scale.

---

## 7. React Rendering Model :

- React's rendering model is based on _reconciliation_, where the UI is a function of state: `UI = f(state)`. Key aspects:

1. **Triggering Renders**: State/prop changes or parent re-renders cause a component to re-render.
2. **Reconciliation Process**:
   - **Render Phase**: React calls component functions to build a new VDOM tree.
   - **Commit Phase**: Applies diffs to the real DOM.
3. **Batching**: Multiple state updates are batched for efficiency (e.g., in event handlers).
4. **Concurrent Mode**: (Experimental) Allows interrupting renders for priority tasks, improving responsiveness.
5. **Server-Side Rendering**: In SSR, React renders to HTML strings on the server, then hydrates on the client.
6. **Suspense and Lazy**: For code-splitting and data-fetching, pausing renders until resources load.

- This model ensures efficient, predictable updates, with tools like React DevTools for inspecting renders.

---

## 8. Declarative UI :

- Declarative UI in React means describing _what_ the UI should look like for a given state, rather than _how_ to achieve it imperatively (e.g., manually adding/removing elements).
- Example : Instead of `document.getElementById('el').innerHTML = 'Hello';`, you write `<div>Hello {name}</div>` in JSX. When `name` changes, React automatically updates the DOM.

#### Benefits :

- **Readability**: Code mirrors the UI structure.
- **Predictability**: State drives UI, reducing bugs.
- **Efficiency**: React optimizes the "how" via VDOM.
- Contrast with imperative: jQuery-style DOM manipulation is error-prone in complex apps. Declarative style aligns with functional programming, making React intuitive for state-driven UIs.

---

## 9. Component-Based Architecture :

- React's component-based architecture breaks the UI into independent, reusable components, each handling a specific part of the interface.

#### Key principles :

1. **Encapsulation** : Components manage their own logic, state, and styles (e.g., via CSS-in-JS).
2. **Composition** : Build complex UIs by nesting components (e.g., `<App><Header /><Main /><Footer /></App>`).
3. **Reusability** : Props allow customization without duplication.
4. **Hierarchy** : Forms a tree structure, with data flowing down.

#### Types :

- **Presentational**: Dumb components focused on UI (receive props).
- **Container**: Smart components handling logic/state.
- This approach fosters maintainability, testing (e.g., via Jest), and collaboration, as teams can work on isolated components.

---

## 10. Unidirectional Data Flow :

- _Unidirectional data flow_ (also called one-way data binding) in React means data flows in a single direction: from parent components to children via props. State changes in a parent trigger re-renders down the tree, but children can't directly modify parent state.

#### Mechanics :

1. **Props Down** : Parents pass data to children as props.
2. **Actions Up** : Children communicate changes via callbacks (e.g., `onClick` handlers) passed as props.
3. **No Two-Way Binding** : Unlike Angular, this prevents implicit mutations.

#### Benefits :

- **Predictability** : Easier to trace data origins and changes.
- **Debugging** : Reduces side effects and cycles.
- **Scalability** : Works with flux patterns like Redux, where actions dispatch to a central store.
- **Example** : A parent form component holds state; child inputs receive values via props and update via callbacks. This enforces a clear, controllable data lifecycle.

---

## 2. <u> Environment & Tooling Basics </u> -

## 11. Node.js Basics (for React) :

- Node.js is a _runtime environment_ that allows JavaScript to run on the _server-side_, but in the context of React development, it's primarily used as a tool for _managing dependencies_, _running scripts_, and _building applications_. Created in _2009_ by _Ryan Dahl_, Node.js is built on _Chrome's V8 JavaScript engine_ and enables _asynchronous_, _event-driven programming_, which is ideal for _I/O-heavy tasks_.

#### For React developers :

- **Installation** : Download Node.js from the official website [nodejs.org](https://nodejs.org/en). It comes bundled with npm (Node Package Manager). Use LTS (Long-Term Support) versions for stability, e.g., Node.js 20.x as of 2026.
- **Key Commands** :
  - `node -v` : Check installed version.
  - `node script.js` : Run a JavaScript file.
- **Role in React** : React apps require Node.js to install packages via npm/yarn, run build tools like Webpack or Vite, and execute development servers. For example, when you run `npm start` in a React project, Node.js powers the underlying scripts.
- **Modules** : Node.js uses CommonJS modules (`require`/`module.exports`), but modern React projects often use ES modules (`import`/`export`) via Babel or native support in newer Node versions.
- **Event Loop** : Handles non-blocking operations, ensuring React build processes (like transpiling JSX) don't hang.
- **Best Practices** : Use nvm (Node Version Manager) to switch between Node versions for different projects. Keep Node updated to benefit from performance improvements and security fixes.
- Without Node.js, you can't set up or run a modern React environment, as it's the foundation for the JavaScript ecosystem.

---

## 12. npm :

- npm (Node Package Manager) is the _default package manager_ for Node.js, used to _install_, _manage_, and _share_ JavaScript packages. It's essential for React development, handling dependencies like React itself, React DOM, and _third-party libraries_.

#### Key features and usage :

- **Installation** : Comes with Node.js. Check with `npm -v`.
- **Commands** :
  - `npm init` : Creates a `package.json` file.
  - `npm install <package>` : Installs a package locally (adds to `node_modules` and `package.json`).
  - `npm install -g <package>` : Global install (e.g., for tools like create-react-app).
  - `npm install --save-dev <package>` : Installs as a dev dependency (e.g., for testing tools).
  - `npm run <script>` : Runs scripts defined in `package.json` (e.g., `npm run build`).
  - `npm update` : Updates packages to latest versions within semantic constraints.
  - `npm audit` : Scans for vulnerabilities.
- **Registries** : Defaults to npmjs.com, but can use private registries for enterprise.
- **Lockfile** : Generates `package-lock.json` to ensure consistent installs across environments.
- **Pros** : Vast registry (over 2 million packages as of 2026), easy scripting.
- **Cons** : Can be slow for large projects due to deep dependency trees; uses a lot of disk space.
- npm is the go-to for beginners in React, providing a straightforward way to bootstrap and maintain projects.

---

## 13. yarn :

- **Yarn** is an alternative package manager for JavaScript, developed by _Facebook (now Meta)_ in 2016 as a _faster_, more _reliable alternative_ to npm. It's compatible with npm's registry and `package.json`, making it drop-in replaceable for React projects.

#### Key differences and features :

- **Installation** : `npm install -g yarn` or download from yarnpkg.com. Check with `yarn -v` (Yarn 1.x is classic; Yarn 2+ is modern with Plug'n'Play).
- **Commands** (similar to npm):
  - `yarn init` : Creates `package.json`.
  - `yarn add <package>` : Installs and adds to dependencies.
  - `yarn add --dev <package>` : Dev dependency.
  - `yarn install` : Installs all dependencies.
  - `yarn run <script>` : Runs scripts.
  - `yarn upgrade` : Updates packages.
- **Advantages** :
  - **Speed** : Parallel downloads and caching make it faster than classic npm.
  - **Determinism** : `yarn.lock` ensures exact versions across installs.
  - **Offline Mode** : Caches packages for offline use.
  - **Workspaces** : Great for monorepos (multiple packages in one repo), common in large React apps.
- **Yarn Berry (2+)** : Zero-installs, Plug'n'Play (no `node_modules`), and better performance.
- **Cons** : Slightly different syntax; migration from npm might require adjustments.
- In React, Yarn is popular for its reliability in team environments, especially with Create React App or Next.js.

---

## 14. pnpm (performant npm) :

- _pnpm_ (performant npm) is a _fast_, _disk-efficient package manager_ introduced in _2016_, designed to address _npm's_ and _Yarn's_ shortcomings like duplicated dependencies and large `node_modules` folders. It's fully compatible with the npm ecosystem and ideal for _React monorepos_.

#### Key features :

- **Installation** : `npm install -g pnpm` or via corepack. Check with `pnpm -v`.
- **Commands** :
  - `pnpm init` : Creates `package.json`.
  - `pnpm add <package>` : Installs and adds.
  - `pnpm install` : Installs dependencies.
  - `pnpm run <script>` : Runs scripts.
- **Unique Aspects** :
  - **Symlinked Store** : Uses a _global store for packages_, symlinking them to projects to avoid duplication (saves ~50-90% disk space).
  - **Speed** : Faster installs due to hard links and no hoisting issues.
  - **Strict Mode** : Prevents accidental peer dependency issues.
  - `pnpm-lock.yaml` : Lockfile for consistency.
  - **Workspaces** : Excellent support for monorepos with filtering (e.g., `pnpm --filter=package-name install`).
- **Pros** : Efficient for large projects; secure by default (no arbitrary scripts).
- **Cons** : Less widespread adoption; some tools might need configuration.
- For React developers handling multiple packages or concerned with build times, pnpm is increasingly recommended as of 2026.

---

## 15. Package.json :

`package.json` is a manifest file in JSON format that defines a Node.js/JavaScript project's metadata, dependencies, scripts, and configurations. It's the heart of any React app's dependency management.

#### Structure and key fields :

- **name** and **version** : Project identifier (e.g., "my-react-app": "1.0.0").
- **dependencies** : Runtime packages (e.g., "react": "^18.2.0").
- **devDependencies** : Build/test tools (e.g., "@babel/core": "^7.0.0").
- **scripts** : Custom commands (e.g., "start": "react-scripts start", "build": "react-scripts build").
- **engines** : Specifies Node version (e.g., "node": ">=14").
- **Other** : `main`, `repository`, `license`, `private` (true for non-publishable apps).
- **peerDependencies** : For libraries requiring specific versions (e.g., React plugins).

#### Usage in React :

- Generated by `npm/yarn/pnpm init`.
- Managed via package manager commands.
- Enables reproducible builds with lockfiles.
- Best practices: Keep it clean, use semantic versioning, and commit it to version control (but not `node_modules`).

---

## 16. Semantic Versioning :

- _Semantic Versioning_ (SemVer) is a versioning scheme for packages, defined as **MAJOR.MINOR.PATCH** (e.g., 2.5.1). It's crucial in React ecosystems to manage dependencies without breaking changes.

#### Rules :

- **MAJOR** : Incremented for incompatible API changes (e.g., breaking React hooks).
- **MINOR** : For backward-compatible additions (e.g., new features).
- **PATCH** : For backward-compatible bug fixes.
- **Pre-releases** : e.g., 1.0.0-alpha.1.
- **Caret (^)** : Allows minor/patch updates (e.g., ^1.2.3 → 1.x.x).
- **Tilde (~)** : Patch updates (e.g., ~1.2.3 → 1.2.x).
- **Exact (=)** : Specific version.
- In `package.json`, use ^ for flexibility. Tools like npm semver calculator help. SemVer ensures stable updates in React apps, preventing "dependency hell."

---

## 17. Create React App (CRA) :

- **Create React App (CRA)** is an official CLI tool from Facebook (Meta) for bootstrapping React applications without manual configuration. Launched in 2016, it's ideal for beginners.

#### Usage :

- **Install** : `npx create-react-app my-app` (npx runs without global install).
- **Structure** : Generates folders like `src/` (App.js, index.js), `public/` (index.html).
- **Commands** : `npm start` (dev server), `npm build` (production bundle), `npm test` (Jest), `npm eject` (expose configs).
- **Under the Hood** : Uses Webpack, Babel, ESLint; supports CSS/Sass, TypeScript (via templates).
- **Pros** : Zero-config, fast setup.
- **Cons** : Bloated for large apps; ejection is one-way. As of 2026, alternatives like Vite are gaining traction for speed.

---

## 18. Vite :

- **Vite** is a modern build tool created by Evan You (Vue creator) in 2020, optimized for fast development with ES modules. It's popular for React due to instant **hot module replacement (HMR)**.

#### Features :

- **Setup** : `npm create vite@latest` (select React template).
- **Dev Mode** : Native ES modules for near-instant starts (no bundling).
- **Build Mode** : Uses Rollup for production bundles.
- **Plugins** : Extensive ecosystem (e.g., for React, TypeScript).
- **Commands** : `npm run dev`, `npm run build`.
- **Pros** : Blazing fast (seconds vs. minutes in CRA), small bundles.
- **Cons** : Less opinionated; requires some config for advanced features.
- Vite is the recommended starter for new React projects in 2026.

---

## 19. Parcel :

- _Parcel_ is a zero-config web application bundler introduced in 2017, supporting React out-of-the-box with fast builds and HMR.

#### Features :

- **Setup** : `npm install --save-dev parcel`, add script: "start" : "parcel index.html".
- **Auto-Handling** : Transpiles JSX/TS, optimizes images/CSS, code-splitting.
- **Build** : `parcel build index.html` for production.
- **Pros** : Simple, fast (multi-core), no config needed.
- **Cons** : Less customizable than Webpack; community smaller.
- Great for quick React prototypes.

---

## 20. Webpack Basics :

- _Webpack_ is a module bundler for JavaScript apps, core to many React setups (e.g., CRA). It bundles JS, CSS, images into static assets.

#### Basics :

- **Config** : `webpack.config.js` with entry (starting file), output (bundle path), loaders (e.g., babel-loader for JSX), plugins (e.g., HtmlWebpackPlugin).
- **Modes** : Development (source maps), Production (minification).
- **Dev Server** : Via webpack-dev-server for HMR.
- **In React** : Transforms JSX to JS, handles imports.
- **Pros** : Highly configurable.
- **Cons** : Steep learning curve.

---

## 21. Babel Basics :

- Babel is a JavaScript transpiler that converts modern JS (ES6+, JSX) to browser-compatible code.

#### Basics :

- **Setup** : Install `@babel/core`, `@babel/preset-env`, `@babel/preset-react`.
- **Config** : `.babelrc` or in Webpack.
- **Plugins/Presets** : Transform syntax (e.g., arrow functions, JSX).
- **In React** : Essential for JSX (`<div>` to `React.createElement`).
- **Pros** : Polyfills features.
- **Cons** : Adds build step.

---

## 22. Development vs Production Builds :

- **Development** : Focuses on DX with source maps, HMR, verbose errors. Slower, larger bundles (e.g., `npm run start` in CRA/Vite).
- **Production** : Optimized for performance—minified, tree-shaken, compressed. No dev tools (e.g., `npm run build`). Deploy to servers/CDNs.
- **Differences** : Env vars (process.env.NODE_ENV), plugins toggle behaviors.
- **Best Practices** : Use env files (.env.development, .env.production) for configs.

---

## 23 Folder Structure Conventions :

- Standard React folder structure promotes organization:
- **public/** : Static assets (index.html, favicon).
- **src/** : Source code.
  - **components/** : Reusable UI (e.g., Button.jsx).
  - **pages/** : Route-based components.
  - **assets/** : Images, fonts.
  - **utils/** : Helper functions.
  - **hooks/** : Custom hooks.
  - **contexts/** : Context providers.
  - **services/** : API calls.
  - **styles/** : CSS.
  - **App.js, index.js** : Entry points.
- **tests/** : Unit tests.
- **Root** : package.json, configs.
- Conventions vary (e.g., feature-based in large apps). Use tools like ESLint for consistency.

---

## 3. <u> JSX </u> -

JSX (JavaScript XML) is a syntax extension to JavaScript that looks similar to HTML/XML and is commonly used with React to describe what the UI should look like. It was introduced by React and is not part of the JavaScript language specification, but it gets transpiled (usually by Babel) into regular JavaScript function calls — specifically `React.createElement()` calls.

- JSX makes React code more readable and declarative compared to writing pure `React.createElement()` trees manually.

---

## 24. JSX Syntax Rules :

- JSX follows strict rules to ensure it can be reliably transpiled:

1. **Must return a single root element** :
   Every JSX expression must resolve to exactly one **top-level** element (or a fragment). You cannot return multiple sibling elements without wrapping them.

   ```jsx
   // Invalid
   return <h1>Title</h1><p>Paragraph</p>;

   // Valid
   return (
     <div>
       <h1>Title</h1>
       <p>Paragraph</p>
     </div>
   );
   ```

2. **All tags must be properly closed** :
   JSX is XML-like, so self-closing tags are required for elements without children.

   ```jsx
   <img src="logo.png" alt="Logo" />        // Correct
   <img src="logo.png" alt="Logo">          // Invalid
   ```

3. **Use camelCase for attribute names** :
   HTML attributes are case-insensitive and use **kebab-case**, but JSX uses **camelCase** to match JavaScript property names.

   ```jsx
   <div className="container" tabIndex="0">  // Correct
   <div class="container" tabindex="0">      // Invalid in JSX
   ```

4. **JavaScript expressions go inside curly braces `{}`** :
   Anything inside `{}` is evaluated as JavaScript.

5. **No inline HTML comments** :
   Use JavaScript-style comments inside `{}`.

6. **Attributes that are reserved JavaScript words are renamed** :
   `class` → `className`, `for` → `htmlFor`.

---

## 25. JSX vs HTML :

| Aspect            | HTML                             | JSX (in React)                              |
| ----------------- | -------------------------------- | ------------------------------------------- |
| Syntax            | Markup language                  | JavaScript syntax extension                 |
| Attributes        | `class`, `for`, lowercase        | `className`, `htmlFor`, camelCase           |
| Comments          | `<!-- comment -->`               | `{/* comment */}`                           |
| Event handling    | `onclick="jsCode()"`             | `onClick={handleClick}` (camelCase)         |
| Styling           | `style="color: red;"`            | `style={{ color: 'red' }}` (object)         |
| Execution         | Static, parsed by browser        | Transpiled to `React.createElement()` calls |
| Logic             | Limited (mostly via script tags) | Full JavaScript expressions allowed         |
| Self-closing tags | Optional for void elements       | Required                                    |

- JSX is **not** HTML — it’s syntactic sugar for creating React elements.

---

## 26. Expressions in JSX :

- Any valid JavaScript expression can be embedded inside curly braces `{}`.

```jsx
function Welcome() {
  const name = "Akhil";
  const isLoggedIn = true;
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <h1>Hello, {name.toUpperCase()}!</h1>
      <p>Year: {currentYear}</p>
      <p>Status: {isLoggedIn ? "Active" : "Guest"}</p>
      <p>2 + 2 = {2 + 2}</p>
    </div>
  );
}
```

Expressions can include :

- Variables
- Calculations
- Function calls
- Ternary operators
- Template literals
- Array methods (`.map()`, etc.)
- **Note** : You cannot use statements (if, for, while, etc.) directly inside `{}` — only expressions.

---

## 27. Embedding Variables :

- Variables are embedded using curly braces:

```jsx
const user = {
  name: "Akhil",
  age: 30,
  location: "Port Washington, NY",
};

return (
  <div>
    <h2>{user.name}</h2>
    <p>Age: {user.age}</p>
    <p>From: {user.location}</p>
  </div>
);
```

- You can also embed object properties, array items, or computed values directly.

---

## 28. Conditional Rendering in JSX :

- React does not have built-in directives like `v-if` or `*ngIf`. Instead, use JavaScript control flow inside JSX.

#### Common patterns :

**Ternary Operator** - Most popular for inline conditions :

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back, Akhil!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}
```

**Logical AND (&&) Rendering** :

- Short-circuit evaluation — renders only if the left side is truthy:

```jsx
function Notification({ unreadMessages }) {
  return (
    <div>
      <h1>Mailbox</h1>
      {unreadMessages.length > 0 && (
        <p>You have {unreadMessages.length} unread messages!</p>
      )}
    </div>
  );
}
```

- Very common pattern for "show if condition is true, otherwise nothing".

**If Statements (Outside JSX)** :

- For more complex logic, move conditionals outside the return:

```jsx
function Dashboard({ user }) {
  let content;

  if (!user) {
    content = <p>Please log in</p>;
  } else if (user.role === "admin") {
    content = <AdminPanel />;
  } else {
    content = <UserPanel />;
  }

  return <div>{content}</div>;
}
```

**JSX Fragments** :

- Fragments let you group elements without adding extra DOM nodes. Introduced in React 16.2. Two syntaxes :

1. **Short syntax** (preferred):
   ```jsx
   return (
     <>
       <h1>Title</h1>
       <p>Paragraph</p>
       <footer>© 2026</footer>
     </>
   );
   ```
2. **Explicit `<Fragment>`** (useful when you need a key):

   ```jsx
   import { Fragment } from "react";

   return (
     <Fragment key="unique-key">
       <h1>Title</h1>
       <p>Content</p>
     </Fragment>
   );
   ```

- Fragments are especially useful in lists, tables, or when returning multiple elements from a component.

---

## 29. JSX Attributes :

- Attributes in JSX use _camelCase_ and accept JavaScript expressions :

```jsx
<img
  src={imageUrl}
  alt={`Profile of ${user.name}`}
  className={isActive ? "avatar active" : "avatar"}
  width={size}
  onClick={handleClick}
/>
```

Special cases:

- `style` → object (see below)
- `className` instead of `class`
- `htmlFor` instead of `for`
- Boolean attributes: `<input disabled />` = `<input disabled={true} />`

---

## 30. JSX Styling :

- Two main ways to apply styles:

1. **Inline styles** (object syntax):

   ```jsx
   const style = {
     color: "royalblue",
     fontSize: "1.5rem",
     backgroundColor: isDark ? "#333" : "#fff",
     padding: "16px",
   };
   return <div style={style}>Styled content</div>;
   ```

   - Uses camelCase properties
   - Values are usually strings (except numeric values for px)

2. **CSS classes** (most common):
   ```jsx
   <div className={`card ${isFeatured ? "featured" : ""}`}>Content</div>
   ```
   Often combined with libraries like:
   - Tailwind CSS
   - CSS Modules
   - styled-components
   - Emotion

---

## 31. JSX Comments :

- You cannot use HTML comments in JSX. Use JavaScript comments inside curly braces:

```jsx
<div>
  {/* This is a single-line comment */}
  {/* 
    This is a 
    multi-line comment 
  */}
  <p>Content</p>
</div>
```

- Multi-line comments must be wrapped in `{}` even if they span lines.

---

## 32. JSX Spread Attributes :

- Spread operator (`...`) is useful for passing multiple props at once:

```jsx
const buttonProps = {
  type: "submit",
  disabled: isSubmitting,
  className: "btn-primary",
};
return <button {...buttonProps}>Submit</button>;
```

Common use cases:

- Passing down props to child components
- Merging default props with overrides
- Working with libraries that provide prop objects

---

## 33. JSX Children :

- Children are content passed between opening and closing tags:

```jsx
<Layout>
  <Header />
  <main>Main content goes here</main>
  <Footer year={2026} />
</Layout>
```

Children can be:

- Strings: `<p>Hello</p>`
- JSX elements
- Arrays of elements
- Numbers (rendered as strings)
- `null`, `undefined`, `true`, `false` (ignored)
- Access children in a component via `props.children`:

```jsx
function Layout({ children }) {
  return (
    <div className="layout">
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
```

---

## 34. JSX Keys Concept :

- Keys help React identify which items have changed, been added, or removed in lists. They must be unique among siblings.
- Correct usage:

```jsx
const todos = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build project" },
];

return (
  <ul>
    {todos.map((todo) => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);
```

**Best practices**:

- Use stable, unique IDs from data (database ID, UUID)
- Never use array index as key (anti-pattern when list order changes)

**Wrong**:

```jsx
{
  todos.map((todo, index) => <li key={index}>{todo.text}</li>);
}
```

- This causes bugs during reordering, filtering, or animations.
  **Why keys matter** : React uses keys during reconciliation to minimize DOM operations and preserve component state (e.g., form input focus).
- Use `React.Fragment` with `key` when you need fragments in a list:

```jsx
{
  items.map((item) => (
    <Fragment key={item.id}>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  ));
}
```

---

## 4. <u> Components </u> -

- Components are the fundamental building blocks of React applications. They are independent, reusable pieces of UI that encapsulate structure, style, and behavior. Components can be _nested_, _managed_, and _composed_ to _create complex interfaces_. React components receive input (props) and return React elements describing what should appear on the screen.

---

## 35. Functional Components :

- Functional components are the modern, _preferred way_ to write React components since the introduction of Hooks in React 16.8. They are simple JavaScript functions that accept props as an argument and return JSX (or null/undefined for no render).

#### Key characteristics :

- **Simplicity** : No `this` keyword, no lifecycle methods (use Hooks instead).
- **Hooks Integration** : Can use state (`useState`), effects (`useEffect`), context (`useContext`), etc.
- **Performance** : Often lighter than class components as they don't create instances.
- **Readability** : Easier to test and understand for most use cases.

Example :

```jsx
import React, { useState } from "react";

function Greeting({ name }) {
  const [greeting, setGreeting] = useState("Hello");

  const handleClick = () => {
    setGreeting("Hi");
  };

  return (
    <div>
      <h1>
        {greeting}, {name}!
      </h1>
      <button onClick={handleClick}>Change Greeting</button>
    </div>
  );
}
// Usage: <Greeting name="Akhil" />
```

- In this example, the component manages local state with `useState` and handles events. Functional components are recommended for new code, as they align with React's shift toward functional programming paradigms.

---

## 36. Class Components (Legacy) :

- Class components are the older way to create React components, using ES6 classes that extend `React.Component`. They were the standard before Hooks and are now considered legacy, though still supported for backward compatibility.

#### Key characteristics :

- **State Management** : Uses `this.state` and `this.setState()`.
- **Lifecycle Methods** : Methods like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` for side effects.
- **this Binding** : Requires binding methods in the constructor for event handlers.
- **Instances** : Each component creates an instance, which can lead to slightly higher memory usage.

Example :

```jsx
import React from "react";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "Port Washington, NY" };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    this.setState({ location: "New York, NY" });
  }

  render() {
    return (
      <div>
        <h2>User: {this.props.name}</h2>
        <p>Location: {this.state.location}</p>
        <button onClick={this.handleUpdate}>Update Location</button>
      </div>
    );
  }
}
// Usage: <UserProfile name="Akhil" />
```

- While functional components with Hooks can replicate all class features, classes are useful for understanding older codebases or when using error boundaries (via `componentDidCatch`).

---

## 37. Component Naming Conventions :

- Naming conventions in React promote consistency, readability, and avoid conflicts :

1. **PascalCase for Components** : Always capitalize the first letter (e.g., `UserDashboard`, `GreetingButton`). This distinguishes components from regular HTML elements (lowercase).
2. **File Naming** : Match the component name, e.g., `Greeting.jsx` or `Greeting.js`. Use `index.js` for default exports in folders.
3. **Props Naming** : Use camelCase (e.g., `userName`, `isActive`).
4. **Event Handlers** : Prefix with `handle` or `on` (e.g., `handleClick`, `onSubmit`).
5. **Custom Hooks** : Prefix with `use` (e.g., `useFetchData`).
6. **Avoid Abbreviations** : Use descriptive names like `ProfilePicture` instead of `ProfPic`.
7. **Folders** : Group related components (e.g., `components/User/UserProfile.jsx`).

- Following these (often enforced by ESLint plugins like `eslint-plugin-react`) makes codebases scalable and easier for teams to navigate.

---

## 38. Component Composition :

- Composition is the practice of building complex UIs by combining simpler components, similar to how functions compose in programming. It promotes reusability and separation of concerns.

#### Key principles :

- **Nesting** : Pass components as children or via props.
- **Props Passing** : Data flows down the component tree.
- **No Inheritance** : React favors composition over class inheritance (use HOCs or render props instead).

Example :

```jsx
function Header() {
  return <h1>Welcome, Akhil!</h1>;
}

function Content() {
  return <p>Your location: Port Washington, NY</p>;
}

function Footer() {
  return <footer>© 2026</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
```

- Here, `App` composes `Header`, `Content`, and `Footer`. This allows independent development and testing of each part.

---

## 39. Reusable Components :

- Reusable components are designed to be used in _multiple places without modification_, _reducing code duplication_. They rely on props for customization.

Design tips :

- **Props-Driven**: Make behavior configurable via props (e.g., `size`, `color`).
- **Default Props**: Provide fallbacks with `defaultProps`.
- **Type Checking**: Use PropTypes or TypeScript for validation.
- **Isolation**: Avoid global state; use context if needed.

Example : A reusable button.

```jsx
import React from "react";
import PropTypes from "prop-types";

function Button({ label, onClick, disabled = false, variant = "primary" }) {
  return (
    <button onClick={onClick} disabled={disabled} className={`btn ${variant}`}>
      {label}
    </button>
  );
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};
// Usage: <Button label="Submit" onClick={handleSubmit} />
```

- This button can be reused across forms, modals, etc., with different props.

---

## 40. Presentational Components :

- _Presentational (or "dumb") components_ focus solely on UI rendering. They receive data via props and don't manage _state_ or _side effects_.

#### Characteristics :

- **Input**: Props only.
- **Output**: JSX.
- **No Dependencies**: Minimal imports (e.g., no API calls).
- **Testable**: Easy to snapshot test.

Example:

```jsx
function UserCard({ name, location }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Location: {location}</p>
    </div>
  );
}
```

- Use them for layouts, styles, and static displays. Pair with container components for logic.

---

## 41. Container Components :

- _Container (or "smart") components_ handle logic, state, and data fetching. They wrap presentational components and pass data via props.

#### Characteristics :

- **Stateful** : Manage state, effects.
- **Business Logic** : API calls, computations.
- **Composition** : Render presentational components.

Example :

```jsx
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard"; // Presentational

function UserContainer() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetch
    setUser({ name: "Akhil", location: "Port Washington, NY" });
  }, []);

  return user ? (
    <UserCard name={user.name} location={user.location} />
  ) : (
    <p>Loading...</p>
  );
}
```

- This pattern (from Dan Abramov's blog) separates concerns, improving maintainability.

---

## 42. Stateless vs Stateful Components :

- **Stateless (Functional without Hooks or Pure)**: No internal state; pure functions of props. Rerender only on prop changes. Example : Simple display components.
  ```jsx
  function Stateless({ message }) {
    return <p>{message}</p>;
  }
  ```
- **Stateful** : Manage internal state (via `useState` or `this.state`). Rerender on state changes. Used for interactive elements.
  ```jsx
  function Stateful() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
  }
  ```
- Stateless are predictable and optimizable (e.g., with `React.memo`); stateful handle dynamics.

---

## 43. Controlled Components :

- _Controlled components_ have their form values managed by _React state_. The component's value is set via props, and changes update state.
- _Advantages_ : Single source of truth, validation, dynamic updates.

Example (input) :

```jsx
function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

- Ideal for forms where you need to sync, validate, or derive values.

---

## 44. Uncontrolled Components :

- Uncontrolled components manage their own state internally, using DOM refs to access values.
- _Advantages_ : Simpler for one-off forms; integrates with non-React code.

Example:

```jsx
import React, { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <input type="text" ref={inputRef} defaultValue="Initial" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

- Use when React doesn't need to control the value (e.g., file inputs).

---

## 45. Higher Order Components :

- _Higher-Order Components (HOCs)_ are functions that take a component and return an _enhanced version_, adding behavior without modifying the original.
- _Pattern_ : Reuse logic like authentication, logging.

Example :

```jsx
function withLogger(WrappedComponent) {
  return function Enhanced(props) {
    console.log("Props:", props);
    return <WrappedComponent {...props} />;
  };
}

const LoggedGreeting = withLogger(Greeting);
// Usage: <LoggedGreeting name="Akhil" />
```

- Pros: Composition for cross-cutting concerns. Cons: Can lead to wrapper hell; Hooks often replace HOCs.

---

## 46. Dumb vs Smart Components :

- **Dumb (Presentational)** : Focus on UI; props-only; no state/logic. Reusable, testable.
- **Smart (Container)** : Handle data, state, effects; compose dumb components. App-specific.
- This **dichotomy** (similar to presentational/container) encourages separation : Dumb for views, smart for orchestration. In modern React, Hooks blur the lines, but the principle aids architecture.

---

## 5. <u> Props </u> -

- Props (short for "properties") are the primary mechanism for passing data from parent components to child components in React. They are **read-only** (immutable from the child's perspective) and allow components to be reusable and configurable.
- Props make React components composable : the same component can behave differently or display different content based on the data it receives.

---

## 47. Props Basics :

- Props are passed to a component as a single object (commonly called `props`).
- A functional component receives props as its first (and usually only) argument.
- A class component receives props via `this.props`.
- Props can contain any valid JavaScript value : strings, numbers, booleans, objects, arrays, functions, JSX elements, etc.
- Changing props from inside a child component is not allowed — doing so is a common anti-pattern.

Basic example :

```jsx
// Parent
function App() {
  return <Greeting name="Akhil" location="Port Washington, NY" />;
}

// Child (functional)
function Greeting(props) {
  return (
    <h1>
      Hello, {props.name} from {props.location}!
    </h1>
  );
}
```

---

## 48. Passing Props :

- Props are passed as attributes in JSX, just like HTML attributes :

```jsx
<UserProfile
  userId={123}
  name="Akhil"
  isPremium={true}
  preferences={{ theme: "dark", notifications: true }}
  onLogout={handleLogout}
/>
```

- Attribute names become property names on the `props` object.
- Values that are JavaScript expressions must be wrapped in curly braces `{}`.
- String literals can be written without braces (React converts them automatically).

Multiple ways to pass the same value:

```jsx
<Counter initialValue={5} />           {/* number */}
<Counter initialValue={"5"} />         {/* string */}
<Counter initialValue={5 + 3} />       {/* expression */}
<Counter initialValue={parseInt("42")} /> {/* function call */}
```

---

## 49. Props Destructuring :

- Instead of accessing props via `props.xxx`, you can destructure them in the function parameter list — cleaner and more common in modern React.

```jsx
// Long form
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Destructured (preferred)
function Greeting({ name, location = "New York" }) {
  return (
    <h1>
      Hello, {name} from {location}!
    </h1>
  );
}
```

- You can also destructure inside the function body:

```jsx
function UserCard(props) {
  const { name, avatarUrl, bio } = props;
  return (
    <div>
      <img src={avatarUrl} alt={name} />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
}
```

---

## 50. Default Props :

- Default props provide fallback values when a prop is not passed by the parent.

Two common ways :

1. **Using default parameter values** (modern & recommended for functional components) :

   ```jsx
   function Button({ label = "Click Me", variant = "primary" }) {
     return <button className={`btn-${variant}`}>{label}</button>;
   }
   ```

2. **Using `defaultProps` static property** (used in class components and older code)

   ```jsx
   function Icon({ name, size = 24 }) {
     return <i className={`icon-${name}`} style={{ fontSize: size }} />;
   }

   Icon.defaultProps = {
     size: 24,
   };
   ```

- Default props are applied only when the prop is `undefined` (not when it's `null`).

---

## 51. Props Validation (PropTypes) :

- PropTypes is a runtime type-checking library that helps catch bugs by validating the types and required status of props.
- Installation (if not using Create React App or Vite template that includes it):

```bash
npm install prop-types
```

Usage :

```jsx
import PropTypes from "prop-types";

function UserInfo({ name, age, isActive, avatar }) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <h2>
        {name} ({age})
      </h2>
      <p>Active: {isActive ? "Yes" : "No"}</p>
    </div>
  );
}

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isActive: PropTypes.bool,
  avatar: PropTypes.string,
  // More validators:
  // onClick: PropTypes.func,
  // items: PropTypes.arrayOf(PropTypes.string),
  // user: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   name: PropTypes.string
  // })
};
```

Common validators:

- `PropTypes.string`, `.number`, `.bool`, `.func`, `.object`, `.array`
- `.isRequired`
- `.arrayOf()`, `.objectOf()`, `.shape()`, `.oneOf()`, `.oneOfType()`

- **Note**: PropTypes only runs in development mode — zero cost in production.

---

## 52. Children Prop :

- The special `children` prop contains everything passed between the opening and closing JSX tags.

```jsx
function Card({ children, title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
}

// Usage
<Card title="User Profile">
  <p>Name: Akhil</p>
  <p>Location: Port Washington, NY</p>
  <button>Edit</button>
</Card>;
```

- `children` can be:
- String
- JSX element(s)
- Array of elements
- `null` / `undefined` / `false` (ignored in rendering)
- Very common pattern for layout/wrapper components.

---

## 53. Props Drilling :

- _Props drilling_ is the process of passing props through multiple levels of components when they are needed deeper in the tree.

Example of drilling :

```jsx
function App() {
  const user = { name: "Akhil", theme: "dark" };
  return <Layout user={user} />;
}

function Layout({ user }) {
  return <Sidebar user={user} />;
}

function Sidebar({ user }) {
  return <ThemeToggle user={user} />;
}

function ThemeToggle({ user }) {
  return <button>Toggle {user.theme} theme</button>;
}
```

**Problems** :

- Boilerplate
- Hard to maintain
- Components receive props they don't use

**Solutions** :

- React Context API
- State management libraries (Redux, Zustand, Jotai)
- Component composition / render props / children patterns

---

## 54. Immutable Props :

- Props are **read-only** in the component that receives them.
- Never mutate `props` directly (e.g., `props.name = "new"` — forbidden).
- If you need to derive new data, create new variables or use state.
- Immutability ensures predictability and enables optimizations (e.g., `React.memo`, `shouldComponentUpdate`).

Correct:

```jsx
function Display({ user }) {
  const displayName = user.name.toUpperCase(); // new value, props unchanged
  return <h1>{displayName}</h1>;
}
```

Incorrect:

```jsx
function Bad({ user }) {
  user.name = "Changed"; // Never do this!
  return <h1>{user.name}</h1>;
}
```

---

## 55. Passing Functions as Props :

- Functions are commonly passed as props to allow children to communicate upward (callbacks).
- Naming convention: `on` + event name (e.g., `onClick`, `onSubmit`, `onDelete`).

Example :

```jsx
function Parent() {
  const handleDelete = (id) => {
    console.log("Deleting item", id);
  };

  return <Child onDelete={handleDelete} itemId={42} />;
}

function Child({ onDelete, itemId }) {
  return <button onClick={() => onDelete(itemId)}> Delete </button>;
}
```

- This creates unidirectional data flow: parent → child (via props), child → parent (via callback).

---

## 56. Props vs State :

| Aspect              | Props                                       | State                                        |
| ------------------- | ------------------------------------------- | -------------------------------------------- |
| Owned by            | Parent component                            | The component itself                         |
| Mutable?            | No (read-only in child)                     | Yes (via setState / useState)                |
| Purpose             | Pass data/configuration downward            | Manage internal component data/behavior      |
| Causes re-render?   | Yes (when parent re-renders with new props) | Yes (when setState is called)                |
| Can be passed down? | Yes                                         | No (unless lifted to parent or via context)  |
| Typical usage       | Initial values, callbacks, configuration    | Form inputs, toggles, fetched data, UI state |
| Example             | `<User name="Akhil" />`                     | `const [count, setCount] = useState(0)`      |

- **Key Principle** :  
  "If a piece of data is used by multiple components or needs to be updated over time → consider lifting it to state in a common parent (or using context/store). If it's only used inside one component → keep it as local state."

- Props and state together drive the UI: `UI = f(props, state)`.

---

## 6. <u> State </u> -

- State is any piece of data that can change over time and, when it changes, should trigger a re-render of the component (or parts of the UI). In React, state is what makes components interactive and dynamic. React provides tools to manage state in a predictable and performant way.

---

## 57. State Basics :

- State represents the **internal memory** of a component.
- When state changes, React re-renders the component (and potentially its children).
- State is **local** by default — each component instance has its own state.
- React manages state updates asynchronously and batches them for performance.
- Two main ways to manage state in modern React:
  - `useState` Hook (functional components — recommended)
  - `this.state` / `this.setState` (class components — legacy)

#### Core principle :

- **UI = f(state, props)**  
  Every time state changes, React calls your component function again with the new state → new UI.

---

## 58. useState Hook :

- `useState` is the primary Hook for adding state to functional components. It was introduced in React 16.8.

Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

- Returns a **pair** (array destructuring):
  - `state`: current value
  - `setState`: function to update the value
- Calling `setState` schedules a re-render with the new value.
- `useState` can be called multiple times in one component.

Example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## 59. Initial State :

- The argument passed to `useState` is the **initial value** — used only on the very first render.

```jsx
const [name, setName] = useState("Akhil"); // string
const [isDark, setIsDark] = useState(false); // boolean
const [user, setUser] = useState({ name: "Akhil", city: "Port Washington" }); // object
const [items, setItems] = useState([]); // array
const [count, setCount] = useState(() => expensiveCalculation()); // lazy init
```

**Lazy initialization** (important for expensive computations):

```jsx
const [data, setData] = useState(() => {
  console.log("This runs only once");
  return fetchInitialData(); // expensive operation
});
```

- The function is called only once during initial render — not on updates.

---

## 60. Updating State :

- Never mutate state directly. Always use the setter function.

Correct :

```jsx
setCount(count + 1);
setUser({ ...user, city: "New York" });
setItems([...items, newItem]);
```

Incorrect (will cause bugs) :

```jsx
count++; // mutation
user.city = "New York"; // direct mutation
items.push(newItem); // mutates original array
```

- `setState` can also accept a function (recommended when depending on previous state) :

```jsx
setCount((prevCount) => prevCount + 1);
```

---

## 61. State Immutability :

- React relies on immutability to detect changes efficiently (especially with `React.memo`, `useMemo`, `useEffect` dependencies).
- **Primitives** (string, number, boolean) : Replacing value is fine.
- **Objects & Arrays** : Always create a **new** reference.

Examples :

```jsx
// Object
setUser((prev) => ({ ...prev, name: "Akhil Updated" }));

// Array - add
setTodos((prev) => [...prev, newTodo]);

// Array - remove
setTodos((prev) => prev.filter((t) => t.id !== idToRemove));

// Array - update
setTodos((prev) =>
  prev.map((todo) =>
    todo.id === targetId ? { ...todo, completed: true } : todo,
  ),
);
```

- Immutability prevents subtle bugs and enables performance optimizations.

---

## 62. Functional State Updates :

- When the new state depends on the previous state, always use the functional form to avoid stale closures.
- Problematic (stale state) :

```jsx
// This may batch and use outdated count
setCount(count + 1);
setCount(count + 1); // might only increment once
```

Correct :

```jsx
setCount((prev) => prev + 1);
setCount((prev) => prev + 1); // guaranteed +2
```

Especially important in :

- Event handlers with multiple updates
- `useEffect` when depending on state
- Rapid user interactions (click spamming)

---

## 63. Multiple State Variables :

- You can (and often should) use multiple `useState` calls instead of one large object.

Preferred :

```jsx
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
```

Less preferred (unless tightly related) :

```jsx
const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
```

**When to use one object**:

- Form data that is submitted together
- Settings object
- Data that is always updated as a unit

**When to split**:

- Independent pieces of state
- Different update frequency
- Easier testing and debugging

---

## 64. Derived State :

- Derived state is state that can be **computed** from other state or props — **do not store it in state**.

Bad:

```jsx
const [fullName, setFullName] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);
```

Better :

```jsx
const fullName = `${firstName} ${lastName}`.trim();
```

- Use plain variables, `useMemo`, or just compute in render when derived value is cheap.

---

## 65. Lifting State Up :

- When two or more sibling components need to share the same state → **lift it up** to their closest common parent.

Example :

```jsx
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>{scale === "c" ? "Celsius" : "Fahrenheit"}</legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

function Calculator() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCChange = (value) => {
    setTemperature(value);
    setScale("c");
  };

  const handleFChange = (value) => {
    setTemperature(value);
    setScale("f");
  };

  return (
    <>
      <TemperatureInput
        scale="c"
        temperature={temperature}
        onTemperatureChange={handleCChange}
      />
      <TemperatureInput
        scale="f"
        temperature={temperature}
        onTemperatureChange={handleFChange}
      />
    </>
  );
}
```

- State lives in `Calculator` → both inputs stay in sync.

---

## 66. Local vs Global State :

- **Local State** : Managed inside one component using `useState` or `useReducer`. Best for UI-specific concerns (toggle, form input, counter).

- **Global State** : State that many components need to access or update.
  Common solutions :
  - React Context API (built-in)
  - Zustand, Jotai, Recoil (lightweight)
  - Redux, MobX (traditional / complex apps)
- Rule of thumb :
  > Keep state as local as possible. Only lift or globalize when truly needed.

---

## 67. State Synchronization :

- Avoid manually keeping two pieces of state in sync — it leads to bugs.

Anti-pattern :

```jsx
const [count, setCount] = useState(0);
const [double, setDouble] = useState(0);

useEffect(() => {
  setDouble(count * 2);
}, [count]);
```

Better :

```jsx
const [count, setCount] = useState(0);
const double = count * 2; // derived, always correct
```

- If sync is truly required (rare), prefer derived values or controlled components.

---

## 68. State Anti-Patterns :

1. **Direct mutation of state**  
   `count++`, `user.name = "new"`, `items.push()`
2. **Storing derived/computed values in state**  
   Full name, totals, filtered lists
3. **Using state for what should be a ref**  
   Storing previous values, DOM nodes, timers → use `useRef`
4. **Overusing global state**  
   Putting every toggle, form field, etc., into Redux/Context
5. **Ignoring stale closures**  
   Using non-functional updates in rapid-succession scenarios
6. **Storing JSX in state**  
   `setContent(<div>...</div>)` → return JSX directly or use components
7. **Resetting state incorrectly**  
   Using `setState(initial)` instead of a key or reset function

Correct reset example :

```jsx
function Form() {
  const [key, setKey] = useState(0);
  const reset = () => setKey((prev) => prev + 1);

  return <input key={key} />; // remounts component
}
```

- Mastering state management is one of the most important skills in React — it directly affects performance, bug frequency, and maintainability.

---

## 7. <u> Event Handling </u> -

- React provides a consistent, cross-browser way to handle DOM events through **Synthetic Events**. These events wrap native browser events and behave predictably across different browsers and devices. React's event system is one of the key reasons developers find event handling simpler and more reliable compared to vanilla JavaScript.

---

## 69. Synthetic Events :

- React creates a **SyntheticEvent** object that normalizes event properties and behavior across browsers.

Key characteristics :

- **Cross-browser consistency** — properties like `event.preventDefault()`, `event.stopPropagation()`, `event.target`, `event.currentTarget`, `event.key`, etc. work the same everywhere.
- **Event pooling** — for performance, React pools (reuses) event objects. After the event handler runs, the event object is cleared (all properties become `null`).
- **Nullified properties** — if you need to access event properties asynchronously (e.g., in a `setTimeout`), you must call `event.persist()` or store needed values beforehand.

Example of pooling issue :

```jsx
function handleClick(event) {
  // This works synchronously
  console.log(event.target.tagName);

  setTimeout(() => {
    // This will log null (because event is pooled and reset)
    console.log(event.target.tagName);

    // Fix 1: Persist the event
    event.persist();
    setTimeout(() => console.log(event.target.tagName), 1000);

    // Fix 2: Store value immediately
    const targetTag = event.target.tagName;
    setTimeout(() => console.log(targetTag), 1000);
  }, 1000);
}
```

- Modern recommendation: Prefer storing values explicitly over `persist()` (deprecated in React 18+ in many cases).

---

## 70. Event Binding :

- In React, event handlers are attached using camelCase property names (e.g., `onClick`, `onChange`, `onSubmit`).

Two main ways to define handlers :

1. **Class components** (legacy)

   ```jsx
   class Button extends React.Component {
     constructor(props) {
       super(props);
       // Bind in constructor (most common pattern)
       this.handleClick = this.handleClick.bind(this);
     }

     handleClick() {
       console.log("Clicked!");
     }

     render() {
       return <button onClick={this.handleClick}>Click</button>;
     }
   }
   ```

2. **Functional components** (modern — preferred)
   - Use arrow functions (lexical `this`) or define inside component (new function on each render)

   ```jsx
   function Button() {
     // Option 1: Define inside render (new function each time)
     const handleClick = () => {
       console.log("Clicked!");
     };

     // Option 2: Memoized with useCallback (better for performance)
     const handleClickMemo = useCallback(() => {
       console.log("Clicked!");
     }, []);

     return <button onClick={handleClick}>Click</button>;
   }
   ```

- **Performance note**: Inline arrow functions (`onClick={() => doSomething()}`) create a new function on every render. Use `useCallback` when passing handlers to memoized children or when performance is critical.

---

## 71. Inline Event Handlers :

- You can define handlers directly in JSX (common for simple cases):

```jsx
<button onClick={() => alert("Clicked!")}>Click me</button>
```

- _Pros_ : Quick and readable for trivial logic.
- _Cons_ : Creates new function every render → can hurt performance when passed to many children or m-emoized components.
- Best practice: Define handler as a named function or use `useCallback`.

---

## 72. Passing Arguments to Handlers :

- Three common patterns :

1. **Arrow function wrapper** (most common)

   ```jsx
   <button onClick={() => handleDelete(item.id)}>Delete</button>
   ```

2. **Bind in render** (less common now)

   ```jsx
   <button onClick={handleDelete.bind(null, item.id)}>Delete</button>
   ```

3. **Using data attributes** (useful in loops)

   ```jsx
   <button data-id={item.id} onClick={handleDelete}>
     Delete
   </button>;

   function handleDelete(e) {
     const id = e.currentTarget.dataset.id;
     // ...
   }
   ```

- Recommendation: Use arrow function wrapper unless you have hundreds/thousands of elements.

---

## 73. Event Delegation :

- React uses a single event listener at the root of the document (event delegation) rather than attaching listeners to every DOM node.

Benefits:

- Better performance (fewer listeners)
- Works even when elements are added/removed dynamically
- Consistent behavior across browsers
- You almost never need to worry about manual delegation in React — it’s handled automatically.

---

## 74. Prevent Default :

- Many browser events have default behavior (e.g., form submit reloads page, link click navigates).
- Use `event.preventDefault()` to stop it :

```jsx
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // stops page reload
    console.log("Form submitted");
    // handle form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Send</button>
    </form>
  );
}
```

- Common use cases: forms, links (`<a onClick={...}>`), drag-and-drop.

---

## 75. Stop Propagation :

- `event.stopPropagation()` prevents the event from bubbling up to parent elements.

```jsx
<div onClick={() => console.log("Parent clicked")}>
  <button
    onClick={(e) => {
      e.stopPropagation();
      console.log("Button clicked");
    }}
  >
    Click me
  </button>
</div>
```

- Clicking button logs only "Button clicked" (parent handler is not triggered).
- Use carefully — overusing can make event flow hard to reason about.

---

## 76. Keyboard Events :

- React normalizes keyboard events across browsers.

Common events :

- `onKeyDown`, `onKeyPress` (deprecated), `onKeyUp`
- Properties: `event.key`, `event.code`, `event.ctrlKey`, `event.shiftKey`, `event.metaKey`, `event.altKey`

Example — Enter key submit :

```jsx
function SearchInput() {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Search:", e.target.value);
    }
  };

  return (
    <input onKeyDown={handleKeyDown} placeholder="Press Enter to search" />
  );
}
```

- Useful keys : `"Escape"`, `"ArrowUp"`, `"ArrowDown"`, `"Tab"`, `" "`, etc.

---

## 77. Mouse Events :

Common mouse events in React :

- `onClick`, `onDoubleClick`
- `onMouseDown`, `onMouseUp`, `onMouseEnter`, `onMouseLeave`, `onMouseOver`, `onMouseOut`
- `onContextMenu` (right-click)
- Properties: `event.clientX`, `event.clientY`, `event.pageX`, `event.pageY`, `event.screenX`, `event.screenY`, `event.button`

Example — hover detection :

```jsx
function HoverCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ background: isHovered ? "#f0f0f0" : "white" }}
    >
      Hover over me
    </div>
  );
}
```

---

## 78. Form Events :

Most important form events :

- `onSubmit` — on `<form>`
- `onChange` — on inputs, select, textarea (fires on every keystroke/value change)
- `onInput` — similar to `onChange` but lower-level
- `onFocus`, `onBlur`
- `onInvalid` — for form validation

Controlled input example:

```jsx
function LoginForm() {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(email);
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

---

## 79. Custom Events :

- React doesn’t have native custom events like the DOM’s `CustomEvent`, but you can simulate them by passing callback functions as props.

Pattern (very common):

```jsx
// Child
function CustomButton({ onCustomAction }) {
  const trigger = () => {
    onCustomAction?.({ message: "Something happened", value: 42 });
  };

  return <button onClick={trigger}>Trigger Custom Event</button>;
}

// Parent
function Parent() {
  const handleCustom = (data) => {
    console.log("Custom event received:", data);
  };

  return <CustomButton onCustomAction={handleCustom} />;
}
```

For more complex needs (pub/sub across distant components), use :

- Context + state
- Custom hooks
- State management libraries (Zustand, Jotai, Redux)

**Best practices (2026 React) :**

- Prefer named handler functions over inline arrows when passing to children
- Use `useCallback` for expensive or frequently passed handlers
- Always `e.preventDefault()` for form submit and anchor tags when needed
- Avoid `e.persist()` — prefer capturing values early
- Keep event handlers small and focused — move complex logic to custom hooks or state updaters

---

## 8. <u> Conditional Rendering </u> -

- Conditional rendering in React refers to showing or hiding parts of the UI based on certain conditions (usually state, props, or other data). React has **no built-in directives** like `v-if` (Vue) or `*ngIf` (Angular). Instead, you use plain JavaScript control flow inside JSX or before the `return` statement.
- All techniques below rely on the fact that JSX expressions can evaluate to:
- JSX elements
- Strings / numbers
- `null` / `undefined` / `false` / `true` → these are **not rendered** in the DOM

---

## 80. if Statements :

- Use regular `if` statements **outside** the JSX `return` to decide what to render.
- Most readable for complex logic or multiple branches.

```jsx
function Dashboard({ isLoggedIn, userRole }) {
  let content;

  if (!isLoggedIn) {
    content = <LoginPrompt />;
  } else if (userRole === "admin") {
    content = <AdminPanel />;
  } else if (userRole === "moderator") {
    content = <ModeratorTools />;
  } else {
    content = <UserDashboard />;
  }

  return (
    <div className="dashboard">
      <h1>Welcome</h1>
      {content}
    </div>
  );
}
```

- Alternative : Early return pattern (very common)

```jsx
function Profile({ user }) {
  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  if (user.isBanned) {
    return <div>Your account has been suspended.</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Location: {user.location}</p>
    </div>
  );
}
```

- **When to use** : Complex conditions, multiple return paths, early exits.

---

## 81. Ternary Operator :

- The most common inline conditional pattern in JSX.
- Syntax : `condition ? trueExpression : falseExpression`

```jsx
function Greeting({ isLoggedIn, name = "Guest" }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back, {name}!</h1> : <h1>Please sign in</h1>}

      <p>You are {isLoggedIn ? "logged in" : "not logged in"}.</p>
    </div>
  );
}
```

- Nested ternaries (use sparingly — can become hard to read) :

```jsx
{
  status === "loading" ? (
    <Spinner />
  ) : status === "error" ? (
    <ErrorMessage message="Failed to load data" />
  ) : (
    <DataList items={items} />
  );
}
```

- **Best practice**: Keep ternaries shallow (1–2 levels). Extract to variables or early returns for deeper logic.

---

## 82. Logical && Operator :

- _Short-circuit evaluation_ : renders the right side **only if** the left side is truthy.
- Very popular for "show this if condition is true, otherwise nothing".

```jsx
function Notification({ unreadCount }) {
  return (
    <div>
      <h2>Messages</h2>
      {unreadCount > 0 && <span className="badge">{unreadCount} new</span>}
      {isAdmin && <AdminToolbar />}
    </div>
  );
}
```

- Also useful with falsy checks :

```jsx
{
  error && <div className="error">{error}</div>;
}
{
  items.length === 0 && <p>No items found.</p>;
}
```

- **Caution** : Be careful with `0`, `""`, etc. — they are falsy.

```jsx
{
  count && <p>You have {count} items</p>;
} // Won't show when count = 0
```

- Fix : Use explicit comparison

```jsx
{
  count !== 0 && <p>You have {count} items</p>;
}
{
  !!count && <p>You have {count} items</p>;
} // double negation
```

---

## 83. Switch Statements :

- Use `switch` **outside** JSX when you have many discrete cases.

```jsx
function StatusBadge({ status }) {
  let badgeClass;
  let label;

  switch (status) {
    case "success":
      badgeClass = "bg-green-500";
      label = "Success";
      break;
    case "warning":
      badgeClass = "bg-yellow-500";
      label = "Warning";
      break;
    case "error":
      badgeClass = "bg-red-500";
      label = "Error";
      break;
    default:
      badgeClass = "bg-gray-500";
      label = "Unknown";
  }
  return <span className={`badge ${badgeClass}`}>{label}</span>;
}
```

- Alternative: Object lookup (often cleaner)

```jsx
const statusStyles = {
  success: { class: "bg-green-500", label: "Success" },
  warning: { class: "bg-yellow-500", label: "Warning" },
  error: { class: "bg-red-500", label: "Error" },
};

function StatusBadge({ status }) {
  const style = statusStyles[status] || {
    class: "bg-gray-500",
    label: "Unknown",
  };
  return <span className={`badge ${style.class}`}>{style.label}</span>;
}
```

## 84. Conditional Components :

- Render different component types based on condition.

```jsx
function PageContent({ role }) {
  return (
    <main>
      {role === "admin" ? <AdminView /> : <UserView />}
      {/* or */}
      {role === "admin" && <AdminOnlyFeatures />}
    </main>
  );
}
```

- Also common : Conditional import (dynamic) with `React.lazy` + `Suspense`

```jsx
const AdminPanel = React.lazy(() => import("./AdminPanel"));

return isAdmin ? (
  <Suspense fallback={<Loading />}>
    <AdminPanel />
  </Suspense>
) : (
  <RegularDashboard />
);
```

---

## 85. Guard Clauses :

- Guard clauses are early returns that handle invalid/edge cases first.
- Very clean pattern for components with preconditions.

```jsx
function UserProfile({ user, isLoading }) {
  if (isLoading) return <LoadingSpinner />;
  if (!user) return <NotFound message="User not found" />;
  if (user.isPrivate && !user.isFriend) {
    return <PrivateProfileMessage />;
  }

  // Main render
  return (
    <div>
      <Avatar src={user.avatar} />
      <h1>{user.name}</h1>
      {/* ... */}
    </div>
  );
}
```

---

## 86. Conditional Styling :

- Apply classes or inline styles conditionally.

1. **Class names** (most common) :

   ```jsx
   <div className={`card ${isFeatured ? "featured" : ""} ${isDark ? "dark-mode" : ""}`}>
   ```

   Libraries that help :
   - `clsx` / `classnames`
   - Tailwind merge (`twMerge`, `cn` helper)

   ```jsx
   import { cn } from "@/lib/utils";

   <div className={cn("card", isFeatured && "featured", isDark && "dark-mode")}>
   ```

2. **Inline styles** :
   ```jsx
   <div style={{
     backgroundColor: isActive ? "#4CAF50" : "#f44336",
     fontWeight: important ? "bold" : "normal",
     opacity: disabled ? 0.6 : 1
   }}>
   ```

---

## 87. Conditional Props :

- Pass props conditionally (very common pattern).

```jsx
<Button
  variant={isPrimary ? "primary" : "secondary"}
  disabled={isSubmitting || !isValid}
  size={isMobile ? "small" : "medium"}
  onClick={handleSubmit}
  {...(isLoading && { "aria-busy": "true" })}
/>
```

- Spread pattern for multiple conditional props :

```jsx
const extraProps = {
  ...(isError && { "aria-invalid": true, "aria-describedby": "error-msg" }),
  ...(isSuccess && { "aria-describedby": "success-msg" }),
};

return <input {...extraProps} />;
```

**Summary Table – When to Use Which** :

| Technique         | Best For                            | Inline? | Readability | Complexity |
| ----------------- | ----------------------------------- | ------- | ----------- | ---------- |
| Early return / if | Preconditions, loading/error states | No      | High        | Any        |
| Ternary           | Simple two-way choice               | Yes     | Good        | Low–Medium |
| && operator       | Show/hide single element            | Yes     | Excellent   | Low        |
| Object lookup     | Many fixed cases                    | No      | High        | Medium     |
| Guard clauses     | Defensive component entry           | No      | Very high   | Any        |
| cn/clsx helpers   | Complex class names                 | Yes     | Excellent   | Any        |

---

## 9. <u> Lists & Keys </u> -

- Rendering lists is one of the most common tasks in React applications. React provides powerful patterns for efficiently displaying, updating, and managing dynamic collections of data (arrays of objects, items, etc.).
- The core mechanism for rendering lists in React is using JavaScript's `Array.map()` inside JSX, combined with the special `key` prop.

---

## 88. Rendering Lists :

- To render a list of items, you typically:

1. Have an array of data
2. Use `.map()` to transform each item into a React element
3. Return the resulting array of elements inside JSX (React knows how to render arrays of elements)

Basic example:

```jsx
function TodoList() {
  const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a project" },
    { id: 3, text: "Deploy to production" },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.text}</li>
      ))}
    </ul>
  );
}
```

Important rules :

- The result of `.map()` must be placed directly inside JSX (or assigned to a variable first)
- Each child in an array or iterator must have a unique `key` prop (see below)

---

## 89. Array.map() :

- `Array.map()` is the most idiomatic way to render lists in React.

```jsx
const products = [
  { id: "p1", name: "Laptop", price: 1299 },
  { id: "p2", name: "Phone", price: 799 },
  { id: "p3", name: "Headphones", price: 199 },
];

return (
  <div className="product-grid">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
    ))}
  </div>
);
```

- You can also destructure inside the map :

```jsx
{
  products.map(({ id, name, price }) => (
    <div key={id}>
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  ));
}
```

---

## 90. Keys Importance :

- The `key` prop is a special string attribute you **must** provide when rendering arrays of elements. Keys help React identify **which items have changed, been added, or been removed**.

Without proper keys, React falls back to index-based diffing → leading to bugs:

- Wrong items re-rendered
- State lost in components (e.g., form focus, animations)
- Unnecessary DOM mutations → performance issues

Correct :

```jsx
{
  todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
}
```

- React uses keys during the reconciliation (diffing) process to match old and new VDOM trees efficiently.

---

## 91. Stable Keys :

Keys must be :

- **Unique** - among siblings (not globally unique, just within the same list)
- **Stable** - consistent across renders for the same item
- **Predictable** - not random or changing

Best practice : Use a **stable, unique identifier** from your data (usually an ID from database, UUID, etc.).

- Good examples :

```jsx
key={item.id}              // database ID (best)
key={item.slug}            // unique URL-friendly string
key={`${category}-${item.id}`}  // composite key when needed
```

Bad examples :

```jsx
key={Math.random()}        // changes every render → terrible
key={new Date().getTime()} // changes every render
key={index}                // see next section
```

---

## 92. Index as Key (Pitfalls) :

- Using the array index as `key` is a common anti-pattern when the list can **reorder, filter, sort, add/remove items**.

Why it fails :

```jsx
{
  todos.map((todo, index) => <li key={index}>{todo.text}</li>);
}
```

Problems when :

- Items are reordered → React thinks different items moved
- Items are inserted/removed in the middle → wrong components get state
- Components have internal state (inputs, animations) → state jumps to wrong item

Real-world bug example:

```jsx
// Initial list: ["Apples", "Bananas"]
// User checks "Apples" (checkbox state stored in component)
// New list after sort: ["Bananas", "Apples"]
// → Checkbox now appears checked on "Bananas" because index 0 moved
```

**Rule of thumb** :

- Use index as key **only** when :
  - The list is **static** (never reorders, filters, or has items added/removed)
  - Items have **no internal state**
  - List is purely presentational

- Otherwise → always prefer a real ID.

---

## 93. Nested Lists :

- Rendering lists inside lists is common (e.g., categories with items).
- Just apply the same rules at each level :

```jsx
const categories = [
  {
    id: "c1",
    name: "Fruits",
    items: [
      { id: "f1", name: "Apple" },
      { id: "f2", name: "Banana" },
    ],
  },
  {
    id: "c2",
    name: "Vegetables",
    items: [{ id: "v1", name: "Carrot" }],
  },
];

return (
  <div>
    {categories.map((category) => (
      <div key={category.id}>
        <h2>{category.name}</h2>
        <ul>
          {category.items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
```

- Each level needs its own unique `key`.

---

## 94. Conditional Lists :

- Combine list rendering with conditional rendering patterns :

```jsx
function TodoList({ todos, isLoading, error }) {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (todos.length === 0) return <p>No todos yet. Add one!</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
```

- Or inline :

```jsx
<ul>
  {todos.length > 0 ? (
    todos.map((todo) => <li key={todo.id}>{todo.text}</li>)
  ) : (
    <li>No items found</li>
  )}
</ul>
```

---

## 95. Dynamic Lists :

- Dynamic lists change based on user actions (add, remove, filter, sort).
- Use state to manage the array :

```jsx
function DynamicTodoList() {
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), text: "Learn keys" },
  ]);

  const addTodo = () => {
    const newTodo = { id: crypto.randomUUID(), text: "New task" };
    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- Use `crypto.randomUUID()` (modern browsers) or a library like `uuid` for stable IDs when no backend ID exists.

---

## 96. Filtering Lists :

- Filter the array before mapping :

```jsx
function FilteredTodos({ todos, searchTerm }) {
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

- Or inline :

```jsx
<ul>
  {todos
    .filter((todo) => !todo.completed)
    .map((todo) => (
      <li key={todo.id}>{todo.text}</li>
    ))}
</ul>
```

---

## 97. Sorting Lists :

- Sort before rendering (create a new array) :

```jsx
const sortedTodos = [...todos].sort((a, b) => {
  if (sortBy === "name") {
    return a.text.localeCompare(b.text);
  }
  return b.createdAt - a.createdAt; // newest first
});

return (
  <ul>
    {sortedTodos.map((todo) => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);
```

- **Important**: Never mutate the original state array directly — always create a copy.

---

## 10. <u> Styling in React </u> -

- React offers multiple approaches to styling components, ranging from traditional CSS to modern CSS-in-JS solutions. Each method has its strengths, trade-offs, and best use cases. The choice often depends on project size, team preferences, performance requirements, and whether you want scoped styles, theming, or utility-first development.

---

## 98. Inline Styles :

- Inline styles in React are applied directly via the `style` prop, which accepts a **JavaScript object** with camelCase properties.

```jsx
function Button({ isActive }) {
  return (
    <button
      style={{
        backgroundColor: isActive ? "#4CAF50" : "#f44336",
        color: "white",
        padding: "12px 24px",
        border: "none",
        borderRadius: "4px",
        fontSize: "16px",
        cursor: "pointer",
        opacity: isActive ? 1 : 0.6,
        transition: "all 0.3s ease",
      }}
    >
      Click me
    </button>
  );
}
```

**Pros** :

- Dynamic styling is trivial (values from state/props)
- No extra files or build steps
- Scoped to the component

**Cons** :

- No pseudo-classes (`:hover`, `:focus`) or media queries
- Harder to maintain for large components
- No caching/reuse of styles
- Verbose syntax (camelCase, no shorthand like `padding: 12px 24px`)
- Best for : Small components, dynamic values, prototyping.

---

## 99. CSS Stylesheets :

- Classic approach: write CSS in `.css` files and import them.

```css
/* styles/Button.css */
.button {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
.button-primary {
  background-color: #4caf50;
  color: white;
}
.button-danger {
  background-color: #f44336;
  color: white;
}
```

```jsx
import "./Button.css";

function Button({ variant = "primary" }) {
  return <button className={`button button-${variant}`}>Click me</button>;
}
```

**Pros**:

- Familiar to everyone
- Full CSS features (pseudo-classes, media queries, animations)
- Easy to share across components

**Cons**:

- Global namespace → class name collisions possible
- No automatic scoping
- Harder to make truly dynamic
- Best for: Small projects, teams already comfortable with plain CSS.

---

## 100. CSS Modules :

- CSS Modules solve the global namespace problem by **automatically generating unique class names**.

```css
/* Button.module.css */
.button {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
}
.primary {
  background-color: #4caf50;
  color: white;
}
.danger {
  background-color: #f44336;
  color: white;
}
```

```jsx
import styles from "./Button.module.css";

function Button({ variant = "primary" }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>Click me</button>
  );
}
```

**Pros**:

- Locally scoped class names (no collisions)
- Clear connection between CSS and component
- Works with all CSS features

**Cons**:

- Slightly more verbose imports
- Requires build tool support (Create React App, Vite, Next.js all support it)
- Best for : Medium to large projects that want scoped CSS without CSS-in-JS.

---

## 101. Styled Components :

- A popular **CSS-in-JS** library that lets you write actual CSS inside JavaScript and creates styled components.

```jsx
import styled from "styled-components";

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "primary" ? "#4CAF50" : "#f44336"};
  color: white;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.9;
  }
`;

function App() {
  return <Button variant="primary">Click me</Button>;
}
```

**Pros**:

- Full CSS support + dynamic props
- Automatic scoping (unique class names)
- Theming support via `ThemeProvider`
- Great developer experience (colocation of styles and component)

**Cons**:

- Runtime overhead (styles injected at runtime)
- Larger bundle size
- Learning curve if new to CSS-in-JS

---

## 102. Emotion :

- Emotion is a lightweight, performant CSS-in-JS library with two main APIs: `styled` (like styled-components) and `css` prop.

```jsx
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStyles = css`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;

  &:hover {
    background-color: #45a049;
  }
`;

function Button() {
  return <button css={buttonStyles}>Click me</button>;
}
```

- Or using `styled` :

```jsx
import styled from "@emotion/styled";

const Button = styled.button`
  padding: 12px 24px;
  /* ... */
`;
```

**Pros** :

- Very fast (better runtime performance than styled-components)
- `css` prop is extremely flexible
- Great TypeScript support
- Theming via `ThemeProvider`
- Best for: Performance-sensitive apps, modern React projects.

---

## 103. SCSS/SASS :

- **SASS extends CSS** with variables, nesting, mixins, etc. Use with `.scss` files and CSS Modules or plain imports.

```scss
// Button.module.scss
$primary: #4caf50;
$danger: #f44336;

.button {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;

  &.primary {
    background-color: $primary;
    color: white;
  }

  &.danger {
    background-color: $danger;
    color: white;
  }

  &:hover {
    opacity: 0.9;
  }
}
```

```jsx
import styles from "./Button.module.scss";

<button className={`${styles.button} ${styles.primary}`}>Click me</button>;
```

**Pros** :

- Powerful features (variables, nesting, mixins, functions)
- Familiar to CSS developers
- Works well with CSS Modules

**Cons** :

- Requires build tool support
- Still global unless using modules

---

## 104. Tailwind CSS :

- Utility-first CSS framework — write styles using class names directly in JSX.

```jsx
<button
  className={`
    px-6 py-3 rounded-md font-medium text-white transition
    ${
      isPrimary
        ? "bg-green-600 hover:bg-green-700"
        : "bg-red-600 hover:bg-red-700"
    }
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `}
>
  Click me
</button>
```

- With Tailwind + `clsx`/`cn` helper :

```jsx
import { cn } from "@/lib/utils";

<button
  className={cn(
    "px-6 py-3 rounded-md font-medium text-white transition",
    isPrimary
      ? "bg-green-600 hover:bg-green-700"
      : "bg-red-600 hover:bg-red-700",
    disabled && "opacity-50 cursor-not-allowed",
  )}
>
  Click me
</button>;
```

**Pros** :

- Extremely fast development
- Consistent design
- No context switching between CSS and JSX
- Excellent responsive utilities

**Cons** :

- Long class strings
- Requires discipline to avoid bloat
- Learning curve for utility classes

---

## 105. CSS-in-JS :

- General term for libraries that let you write CSS in JavaScript (Emotion, styled-components, JSS, Linaria, Vanilla Extract, etc.).

**Advantages** :

- Scoped styles
- Dynamic values via props/state
- Theming
- Colocation (styles next to component)

**Disadvantages** :

- Runtime cost (some libraries)
- Larger bundles
- Different mental model than traditional CSS

---

## 106. Dynamic Styling :

- Change styles based on state, props, or runtime values.
- Examples :

```jsx
// Inline
style={{ color: isActive ? 'green' : 'red' }}

// Tailwind
className={cn("text-lg", isActive && "font-bold text-green-600")}

// CSS Modules
className={styles[isActive ? 'active' : 'inactive']}

// Emotion
css`color: ${isActive ? 'green' : 'red'};`
```

---

## 107. Conditional Styling :

- Combine dynamic + conditional patterns (see section 8 for more examples).

```jsx
<div
  className={cn(
    "p-4 rounded-lg",
    isSuccess
      ? "bg-green-100 border-green-500"
      : isError
        ? "bg-red-100 border-red-500"
        : "bg-gray-100 border-gray-300",
  )}
>
  {message}
</div>
```

---

## 108. Global Styles :

- Apply styles that affect the entire app (reset, typography, etc.).
- Common approaches :
- Import a global CSS file in `index.js` / `main.tsx`
  ```jsx
  import "./global.css";
  ```
- Use `:root` or `body` selectors
- Styled-components `createGlobalStyle`

  ```jsx
  import { createGlobalStyle } from "styled-components";

  const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
    }
  `;
  ```

---

## 109. Theming :

- Centralized theme management for consistent colors, typography, spacing.
- Common solutions :
- **styled-components / Emotion** `ThemeProvider`
  ```jsx
  <ThemeProvider theme={{ colors: { primary: "#4CAF50" } }}>
    <App />
  </ThemeProvider>
  ```
- **Tailwind** with custom config (`tailwind.config.js`)
- **CSS Variables** (see below)

---

## 110. CSS Variables (Custom Properties) :

- Modern, powerful way to handle theming and dynamic styles.

```css
/* global.css */
:root {
  --primary: #4caf50;
  --danger: #f44336;
  --spacing-unit: 8px;
}

.dark {
  --primary: #66bb6a;
}
```

```jsx
<button style={{ backgroundColor: "var(--primary)" }}>Click</button>
```

- Or in Tailwind :

```jsx
<div className="bg-[--primary] text-white">Themed</div>
```

- **Advantages**: Works everywhere, dynamic updates via JS, great for dark mode.

---

## 111. Responsive Design in React :

- Common patterns :

1. **Tailwind responsive utilities**

   ```jsx
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
   ```

2. **Media queries in CSS/SCSS**

   ```scss
   .container {
     padding: 1rem;
     @media (min-width: 768px) {
       padding: 2rem;
     }
   }
   ```

3. **useMediaQuery** hook (custom or from libraries like `react-responsive`)

   ```jsx
   const isMobile = useMediaQuery("(max-width: 768px)");

   return isMobile ? <MobileNav /> : <DesktopNav />;
   ```

4. **CSS Container Queries** (emerging, modern browsers)

- Best practice: Prefer utility-first (Tailwind) or CSS variables + media queries for maintainable responsive design.

**Summary – Choosing a Styling Approach**

| Approach          | Best For                          | Scoping | Dynamic   | Theming   | Bundle Size  | Learning Curve |
| ----------------- | --------------------------------- | ------- | --------- | --------- | ------------ | -------------- |
| Inline            | Small components, prototyping     | Yes     | Excellent | Poor      | None         | Low            |
| Plain CSS         | Small apps, traditional teams     | No      | Poor      | Poor      | None         | Low            |
| CSS Modules       | Medium/large apps, scoped CSS     | Yes     | Good      | Poor      | None         | Medium         |
| Styled Components | Theming, colocation, large apps   | Yes     | Excellent | Excellent | Medium       | Medium         |
| Emotion           | Performance, modern apps          | Yes     | Excellent | Excellent | Small        | Medium         |
| Tailwind CSS      | Rapid development, design systems | No\*    | Excellent | Excellent | Small–Medium | Medium         |
| SCSS + Modules    | Teams that love SASS features     | Yes     | Good      | Poor      | None         | Medium         |

- \*Tailwind can be scoped with `@apply` or component libraries.

---

## 11. <u> Forms </u> -

- Forms are a core part of most interactive React applications. React provides two main philosophies for managing form inputs: **controlled** and **uncontrolled**. Controlled inputs are overwhelmingly preferred in modern React because they give you full control over the form state, make validation easier, enable dynamic behavior, and keep the UI in sync with the application state.

---

## 112. Controlled Inputs :

- A controlled input is one where **React is the single source of truth** for the input's value. The value is stored in React state, and every change updates that state via an `onChange` handler.

Key characteristics :

- `value` prop is set from state
- `onChange` handler updates state
- React drives the input — never the DOM

Basic example (single input) :

```jsx
import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {" "}
        Name:
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

Advantages :

- Instant validation & feedback
- Easy to reset, clear, or pre-fill
- Consistent state across re-renders
- Works perfectly with derived state and conditional rendering

---

## 113 Uncontrolled Inputs :

- An uncontrolled input lets the **DOM manage its own value**. You access the value only when needed (usually on submit) via a ref.

Example :

```jsx
import { useRef } from "react";

function UncontrolledNameForm() {
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${nameRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {" "}
        Name:
        <input
          type="text"
          ref={nameRef}
          defaultValue="Akhil" // optional initial value
          placeholder="Enter your name"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

When to use uncontrolled :

- Simple forms with no validation or real-time feedback
- Integrating legacy/non-React code
- File inputs (almost always uncontrolled)
- Performance in very large forms (rare)
- **Modern recommendation** : Use **controlled** inputs for almost everything except file inputs.

---

## 114. Form State Management :

- Managing multiple inputs efficiently is a common challenge.
- Approaches :

1. **Multiple useState hooks** (simple forms) :

   ```jsx
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [age, setAge] = useState("");
   ```

2. **Single object state** (most common for medium forms) :

   ```jsx
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     age: "",
     newsletter: false,
   });

   const handleChange = (e) => {
     const { name, value, type, checked } = e.target;
     setFormData((prev) => ({
       ...prev,
       [name]: type === "checkbox" ? checked : value,
     }));
   };
   ```

3. **useReducer** (complex forms with interdependent logic) :

   ```jsx
   const initialState = { name: "", email: "", submitted: false };

   function formReducer(state, action) {
     switch (action.type) {
       case "UPDATE_FIELD":
         return { ...state, [action.field]: action.value };
       case "RESET":
         return initialState;
       default:
         return state;
     }
   }
   ```

4. **Form libraries** (large/complex apps)
   - React Hook Form (lightweight, performant, great validation)
   - Formik (feature-rich, but heavier)
   - Zod + React Hook Form (type-safe validation)

---

## 115. Input Types :

- HTML input types supported in React (controlled unless noted) :
- `text`, `password`, `email`, `tel`, `url`, `search`, `number`
- `date`, `datetime-local`, `month`, `week`, `time`
- `checkbox`, `radio`
- `file` (always uncontrolled)
- `hidden`, `color`, `range`
- All controlled inputs follow the same pattern: `value` + `onChange`.

---

## 116. Text Inputs :

```jsx
<input
  type="text"
  value={formData.name}
  onChange={handleChange}
  name="name"
  placeholder="Your full name"
  maxLength={50}
  required
/>
```

- Common attributes: `placeholder`, `maxLength`, `minLength`, `pattern`, `autoComplete`, `autoFocus`

---

## 117. Checkbox Inputs :

- Single checkbox :

```jsx
<label>
  <input
    type="checkbox"
    name="newsletter"
    checked={formData.newsletter}
    onChange={handleChange}
  />
  Subscribe to newsletter
</label>
```

- Multiple checkboxes (array in state) :

```jsx
const [interests, setInterests] = useState([]);

const handleCheckbox = (e) => {
  const { value, checked } = e.target;
  setInterests((prev) =>
    checked ? [...prev, value] : prev.filter((v) => v !== value),
  );
};

return (
  <>
    <label>
      <input
        type="checkbox"
        value="react"
        checked={interests.includes("react")}
        onChange={handleCheckbox}
      />
      React
    </label>
    <label>
      <input
        type="checkbox"
        value="tailwind"
        checked={interests.includes("tailwind")}
        onChange={handleCheckbox}
      />
      Tailwind CSS
    </label>
  </>
);
```

---

## 118. Radio Buttons :

- Radio buttons in a group share the same `name` attribute.

```jsx
const [gender, setGender] = useState("");

return (
  <div>
    <label>
      <input
        type="radio"
        name="gender"
        value="male"
        checked={gender === "male"}
        onChange={(e) => setGender(e.target.value)}
      />{" "}
      Male
    </label>
    <label>
      <input
        type="radio"
        name="gender"
        value="female"
        checked={gender === "female"}
        onChange={(e) => setGender(e.target.value)}
      />{" "}
      Female
    </label>
  </div>
);
```

---

## 119. Select Dropdowns :

- Single select :

```jsx
<select value={formData.role} onChange={handleChange} name="role">
  <option value="">Select role</option>
  <option value="developer">Developer</option>
  <option value="designer">Designer</option>
  <option value="manager">Manager</option>
</select>
```

- Multiple select (`multiple` attribute + array state) :

```jsx
<select
  multiple
  value={formData.skills}
  onChange={(e) => {
    const options = [...e.target.selectedOptions].map((o) => o.value);
    setFormData((prev) => ({ ...prev, skills: options }));
  }}
>
  <option value="react">React</option>
  <option value="node">Node.js</option>
  <option value="sql">SQL</option>
</select>
```

---

## 120. Textareas :

```jsx
<textarea
  value={formData.message}
  onChange={handleChange}
  name="message"
  rows={6}
  placeholder="Your message here..."
/>
```

- Behaves exactly like `<input type="text">` for controlled usage.

---

## 121. File Inputs :

- File inputs are **always uncontrolled** — React cannot set their value for security reasons.

```jsx
function FileUpload() {
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    if (file) {
      console.log("Selected file:", file.name, file.size);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" ref={fileInputRef} accept=".pdf,.jpg,.png" multiple />
      <button type="submit">Upload</button>
    </form>
  );
}
```

- Use libraries like `react-dropzone` for drag-and-drop UX.

---

## 122. Form Validation :

- Two main layers :

1. **HTML5 validation** (browser built-in)
2. **Custom validation** (application logic)

---

## 123. HTML5 Validation :

```jsx
<input
  type="email"
  required
  minLength={5}
  maxLength={100}
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  title="Please enter a valid email"
/>
```

Common attributes :

- `required`
- `min`, `max`, `minLength`, `maxLength`
- `pattern`
- `type="email"`, `url`, `tel`, etc.
- Use `:invalid` pseudo-class for styling.

---

## 124. Custom Validation :

- Most apps need more than HTML5 offers.
- Patterns :

1. **On change + on submit** (real-time + final check) :

   ```jsx
   const [errors, setErrors] = useState({});

   const validate = () => {
     const newErrors = {};
     if (!formData.name.trim()) newErrors.name = "Name is required";
     if (!/\S+@\S+\.\S+/.test(formData.email))
       newErrors.email = "Invalid email";
     setErrors(newErrors);
     return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     if (validate()) {
       // submit
     }
   };
   ```

2. **Using React Hook Form + Zod** (recommended 2026 pattern) :

   ```jsx
   import { useForm } from "react-hook-form";
   import { zodResolver } from "@hookform/resolvers/zod";
   import * as z from "zod";

   const schema = z.object({
     name: z.string().min(2, "Name must be at least 2 characters"),
     email: z.string().email("Invalid email address"),
     age: z.number().min(18, "Must be 18 or older"),
   });

   function MyForm() {
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm({
       resolver: zodResolver(schema),
     });

     const onSubmit = (data) => console.log(data);

     return (
       <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register("name")} />
         {errors.name && <p>{errors.name.message}</p>}
         {/* ... */}
         <button type="submit">Submit</button>
       </form>
     );
   }
   ```

---

## 125. Form Submission :

- Always prevent default behavior :

```jsx
<form onSubmit={(e) => {
  e.preventDefault();
  // handle submission
}}>
```

Common patterns :

- `fetch` / `axios` POST request
- Disable button while submitting (`isSubmitting` state)
- Show success/error messages
- Reset form after success

---

## 126. Handling Multiple Inputs :

- Use one `handleChange` with dynamic `[name]` :

```jsx
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]:
      type === "checkbox" ? checked : type === "number" ? Number(value) : value,
  }));
};
```

- Then apply to all inputs :

```jsx
<input name="name" value={formData.name} onChange={handleChange} />
<input name="email" type="email" value={formData.email} onChange={handleChange} />
<input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
```

---

## 127. Resetting Forms :

- Ways to reset :

1. **Set state back to initial** :
   ```jsx
   const resetForm = () => {
     setFormData({
       name: "",
       email: "",
       message: "",
     });
   };
   ```
2. **Using form ref + HTML reset** :

   ```jsx
   const formRef = useRef(null);

   <form ref={formRef}>
     {/* inputs */}
   </form>

   <button type="button" onClick={() => formRef.current.reset()}> Reset </button>
   ```

- Note : Works only for uncontrolled inputs or when combined with state reset.

3. **React Hook Form reset**

   ```jsx
   const { reset } = useForm();
   reset(); // or reset({ name: '', email: '' })
   ```

---

## 12. <u> React Hooks (Core) </u> -

- React Hooks, introduced in React 16.8 (2019), allow functional components to use state, lifecycle features, and other React capabilities without classes. Hooks are functions that "hook into" React's state and lifecycle from function components. They promote cleaner, more reusable code and have become the standard way to write React in 2026.

---

## 128. Hooks Rules :

- Hooks follow strict rules to ensure they work correctly with React's rendering and reconciliation :

1. **Only Call Hooks at the Top Level** :
   Do not call Hooks inside loops, conditions, or nested functions. Always call them at the top of your component function. This ensures Hooks are called in the same order on every render, allowing React to track state correctly.

   ```jsx
   // Correct
   function MyComponent() {
     const [count, setCount] = useState(0);
     useEffect(() => {
       /* ... */
     });
     return <div>{count}</div>;
   }

   // Incorrect (conditional Hook call)
   function Bad() {
     if (condition) {
       useEffect(() => {
         /* ... */
       }); // React will throw error
     }
   }
   ```

2. **Only Call Hooks from React Function Components or Custom Hooks**  
   Not from regular JavaScript functions, class components, or outside components.
3. **Custom Hooks Must Start with "use"**  
   This convention helps identify them and enables linting rules (e.g., `eslint-plugin-react-hooks`).
4. **Hooks Are Not Compatible with Class Components**  
   But you can mix functional and class components in the same app.

- React's `eslint-plugin-react-hooks` plugin enforces these rules. Always enable it in your project.

---

## 129. useState :

- `useState` adds local state to functional components.
- Syntax : `const [state, setState] = useState(initialValue);`

- `state`: Current value
- `setState`: Updater function (accepts new value or function)
- `initialValue`: Can be primitive, object, array, or lazy function
- Details : See section 6 for in-depth coverage (initial state, updates, immutability, etc.).
- Example with lazy init :

```jsx
const [user, setUser] = useState(() => loadUserFromLocalStorage());
```

- If we try to update an object passed on to the initial state of the useState then we have to update the object by spreading the prevState and then update so that we don't lose the prev state.
- Or create multiple useStates.

---

## 130. useEffect :

- `useEffect` runs side effects (e.g., data fetching, subscriptions, DOM manipulations) after render.
- Syntax : `useEffect(callback, dependencies);`
- `callback` : Function with effect code. Can return a cleanup function.
- `dependencies` : Array of values. Effect runs if any change (or empty [] for mount only).

How it works :

1. Component renders
2. DOM updates
3. `useEffect` callback runs (if deps changed or first render)

Example : Fetch data

```jsx
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("/api/data");
    const data = await response.json();
    setData(data);
  };
  fetchData();
}, []); // Empty deps → runs once after mount
```

```jsx
useEffect(() => {
  console.log("Resource Changed");

  return () => {
    console.log("Return from resource change");
  };
}, [resourceType]);
```

Common uses :

- API calls
- Event listeners (add in callback, remove in cleanup)
- Timers/intervals

---

## 131. Effect Dependencies :

- Dependencies control when the effect re-runs :

- No deps : Runs after every render
- Empty [] : Runs once after initial render
- [var1, var2] : Runs after initial + when var1 or var2 changes

Rules :

- Include **all** values from component scope used in callback (state, props, functions)
- ESLint `exhaustive-deps` rule helps
- If a function is a dep, wrap in `useCallback`

Example with dep :

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Re-runs when count changes
```

- Omit deps only if you truly want every-render behavior (rare).

---

## 132. Cleanup Functions :

- Return a function from the effect callback to clean up (e.g., remove listeners, cancel subscriptions).

Runs:

- Before next effect run
- On unmount

```jsx
useEffect(() => {
  const handleResize = () => {
    /* ... */
  };
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []); // Cleanup on unmount
```

- Essential for preventing memory leaks in long-lived apps.

---

## 133. Multiple Effects :

- Use as many `useEffect` as needed — better than one giant effect.

```jsx
useEffect(() => {
  /* Fetch user */
}, [userId]);
useEffect(() => {
  /* Setup subscription */
}, [user]);
useEffect(() => {
  /* Update title */
}, [title]);
```

- This separates concerns and makes code easier to read/maintain.

---

## 134. useContext :

- `useContext` subscribes to React Context values without prop drilling.
- Syntax : `const value = useContext(MyContext);`

Example :

```jsx
// Context creation
const ThemeContext = createContext("light");

// Provider
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>;

// Consumer
function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click</button>;
}
```

- Re-renders when context value changes
- Use for global state (theme, auth, i18n)

---

## 135. useRef :

- `useRef` creates a mutable ref object that persists across renders.
- Syntax : `const ref = useRef(initialValue);`

Uses :

1. **DOM refs**: Access DOM nodes

   ```jsx
   const inputRef = useRef(null);
   <input ref={inputRef} />;
   inputRef.current.focus();
   ```

2. **Mutable values** (not causing re-renders)
   ```jsx
   const intervalRef = useRef(null);
   useEffect(() => {
     intervalRef.current = setInterval(() => {
       /* ... */
     }, 1000);
     return () => clearInterval(intervalRef.current);
   }, []);
   ```

- `ref.current` is mutable
- Doesn't trigger re-renders on change

---

## 136. useReducer :

- `useReducer` manages complex state logic (alternative to `useState`).
- Syntax : `const [state, dispatch] = useReducer(reducer, initialState);`
- `reducer`: Pure function `(state, action) => newState`
- `dispatch`: Send actions

Example : Counter with actions

```jsx
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      Count : {state.count}
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
    </>
  );
}
```

Use when :

- State transitions are complex
- Multiple sub-values
- With middleware (e.g., Redux-like)

---

## 137. useCallback :

- `useCallback` memoizes functions to prevent unnecessary re-creations.
- Syntax : `const memoizedFn = useCallback(fn, dependencies);`
- Returns a memoized version of `fn`
- Changes only if deps change

Example :

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked with count", count);
}, [count]); // New fn only if count changes
```

Use to :

- Pass stable callbacks to memoized children
- As deps in `useEffect`

---

## 138. useMemo :

- `useMemo` memoizes expensive computations.
- Syntax : `const memoizedValue = useMemo(computeFn, dependencies);`
- `computeFn`: Returns value (runs only if deps change)
- Caches result

Example :

```jsx
const filteredList = useMemo(() => {
  return items.filter((item) => item.price > threshold);
}, [items, threshold]); // Re-compute only if items or threshold change
```

Use for :

- Heavy calculations (sorting, filtering)
- Derived state that's expensive
- Diff from `useCallback`: `useMemo` memos values; `useCallback` memos functions.

---

## 139. useLayoutEffect :

- Like `useEffect`, but runs **synchronously** after DOM mutations (before browser paints).
- Syntax : Same as `useEffect`

Use when :

- Measuring DOM (e.g., getBoundingClientRect)
- Mutations that affect layout

```jsx
useLayoutEffect(() => {
  // Measure and adjust DOM before paint
}, [deps]);
```

- Rarely needed; prefer `useEffect` for most side effects.

---

## 140. useImperativeHandle :

- Customizes the instance value exposed by `forwardRef`.
- Syntax : `useImperativeHandle(ref, createHandle, dependencies);`
- Example : Expose custom methods

```jsx
const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focusAndClear: () => {
      inputRef.current.focus();
      inputRef.current.value = "";
    },
  }));
  return <input ref={inputRef} {...props} />;
});
```

- Use sparingly — prefers props over imperative code.

---

## 141. useDebugValue :

- Labels custom Hooks in React DevTools.
- Syntax : `useDebugValue(value, formatFn?);`

```jsx
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);
  useDebugValue(isOnline ? "Online" : "Offline");
  // ...
}
```

- Only runs in dev mode; no production impact.

---

## 142. Custom Hooks :

- Custom Hooks are functions starting with "use" that call other Hooks. They encapsulate reusable logic.
- Example : Fetch Hook

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Usage
const { data, loading, error } = useFetch("/api/user");
```

Rules :

- Can call other Hooks
- Share logic, not state
- Compose freely

```jsx
const [name, setName] = useLocalStorage("name", "");

import { useState } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}
export default function useLocalStorage(key, initialValue) {
  const [value, setvalue] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}
```

---

## 143. Hook Composition :

- Combine multiple Hooks/custom Hooks in one component or Hook.

```jsx
function useUserData(id) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    /* fetch user */
  }, [id]);
  return user;
}

function Profile({ id }) {
  const user = useUserData(id);
  const theme = useContext(ThemeContext);
  // ...
}
```

- Promotes modularity and reusability.

---

## 144. Hook Anti-Patterns :

1. **Violating Rules of Hooks** (conditional calls, etc.)
2. **Missing Dependencies** in `useEffect`/`useCallback`/`useMemo`
3. **Stale Closures** (use functional updates in `setState`)
4. **Overusing Memoization** (premature optimization)
5. **Mutating Refs in Render** (use effects for side effects)
6. **Sharing State Between Hooks** (use Context or lift state)
7. **Calling Hooks in Loops** (extract to component)
8. **Ignoring Cleanup** (memory leaks)

- Use ESLint plugin to catch most; test for edge cases.

---

## 13. <u> Component Lifecycle (Conceptual) </u> -

- The React component lifecycle refers to the series of phases a component goes through from its creation to its removal from the DOM. Understanding the lifecycle is crucial for managing side effects, optimizing performance, and ensuring proper cleanup. React components have three main phases: **Mounting**, **Updating**, and **Unmounting**.
- In class components (legacy), these phases are managed via specific lifecycle methods. In functional components (modern standard), Hooks like `useEffect` and `useLayoutEffect` replicate and simplify this behavior.

---

## 145. Mounting Phase :

- The mounting phase occurs when a component is being created and inserted into the DOM for the first time. This is the initial render cycle.
- Key steps :

1. **Constructor/Initialization** : State and props are set up.
2. **Render** : The component's JSX is evaluated to create the initial DOM structure.
3. **DOM Insertion** : The rendered output is added to the DOM.
4. **Post-Mount Effects** : Side effects (e.g., data fetching, subscriptions) are run after the DOM is updated.

In class components :

- Methods called : `constructor()`, `getDerivedStateFromProps()`, `render()`, `componentDidMount()`

In functional components :

- The component function runs (initial state via `useState`).
- Effects with empty deps (`useEffect(() => {}, [])`) run after mount.

Example (functional) :

```jsx
function MyComponent() {
  useEffect(() => {
    console.log("Component mounted");
    // Fetch data or set up listeners here
  }, []); // Empty array → runs once after mount

  return <div>Hello</div>;
}
```

- This phase is ideal for initial setup, like API calls or event listeners.

---

## 146. Updating Phase :

- The updating phase happens whenever a component's state or props change, causing a re-render. React efficiently diffs the changes and updates only what's necessary.

Key steps :

1. **Receive New Props/State** : Detect changes.
2. **Pre-Update Logic** : Decide if update is needed or derive new state.
3. **Render** : Re-evaluate JSX with new data.
4. **DOM Update** : Apply changes to the DOM.
5. **Post-Update Effects** : Run side effects after update.

Triggers :

- `setState` / `useState` setter
- Prop changes from parent
- Force update (rare)

In class components :

- Methods : `getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()`, `componentDidUpdate()`

In functional components :

- Component re-runs with new state/props.
- `useEffect` with deps runs if deps changed.

Example :

```jsx
function Counter({ initial }) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    console.log("Count updated to", count);
    // Side effects based on count
  }, [count]); // Runs after update when count changes

  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}
```

- Optimize with `shouldComponentUpdate` (class) or `React.memo` (functional) to skip unnecessary updates.

---

## 147. Unmounting Phase :

- The unmounting phase occurs when a component is removed from the DOM (e.g., conditional rendering hides it, or parent unmounts).

Key steps :

1. **Pre-Unmount Cleanup** : Remove listeners, cancel requests, clear timers.
2. **Removal** : Component is destroyed, state is lost.

In class components :

- Method: `componentWillUnmount()`

In functional components :

- Cleanup function returned from `useEffect`.

Example :

```jsx
function Timer() {
  useEffect(() => {
    const id = setInterval(() => console.log("Tick"), 1000);
    console.log("Mounted");

    return () => {
      clearInterval(id);
      console.log("Unmounted and cleaned up");
    };
  }, []); // Cleanup runs on unmount

  return <div>Timer running</div>;
}
```

- Always clean up to prevent memory leaks, especially in SPAs where components mount/unmount frequently.

---

## 148. Lifecycle Methods (Class) :

- Class components (legacy, pre-Hooks) use explicit methods for each lifecycle phase. These are called automatically by React.

Full list :

1. **Mounting** :
   - `constructor(props)`v: Initialize state/props bindings.
   - `static getDerivedStateFromProps(props, state)` : Derive state from props (rare).
   - `render()` : Return JSX (pure, no side effects).
   - `componentDidMount()` : DOM is ready; fetch data, add listeners.

2. **Updating** :
   - `static getDerivedStateFromProps(props, state)` : Update state based on prop changes.
   - `shouldComponentUpdate(nextProps, nextState)` : Return false to skip update (optimization).
   - `render()` : Re-render JSX.
   - `getSnapshotBeforeUpdate(prevProps, prevState)` : Capture DOM info before update (e.g., scroll position).
   - `componentDidUpdate(prevProps, prevState, snapshot)` : Post-update; compare prev/current, run effects.

3. **Unmounting**:
   - `componentWillUnmount()`: Cleanup.

4. **Error Handling**:
   - `static getDerivedStateFromError(error)`
   - `componentDidCatch(error, info)`

Example class :

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.format !== this.props.format) {
      console.log("Format changed");
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}
```

- Avoid new code with classes; use Hooks instead.

---

## 149. Mapping Lifecycle to Hooks :

- Hooks replace class lifecycles with a more flexible, composable system.

Mapping :

- **constructor** : Initial `useState` calls.
- **componentDidMount** : `useEffect(() => {}, [])`
- **componentDidUpdate** : `useEffect(() => {}, [deps])` (runs after updates when deps change)
- **componentWillUnmount** : Cleanup return from `useEffect`
- **shouldComponentUpdate** : `React.memo` or `useMemo` for children
- **getDerivedStateFromProps** : Compute derived values in render or `useMemo`
- **getSnapshotBeforeUpdate** : `useLayoutEffect` (sync before paint)

Example Hook equivalent of class Clock :

```jsx
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []); // Mount/unmount

  return <div>{time.toLocaleTimeString()}</div>;
}
```

- Hooks are more powerful: Multiple effects, custom Hooks for shared logic.

---

## 150. Side Effects Handling :

- Side effects are operations with external impact (non-pure): API calls, DOM mutations, logging, subscriptions.

In React :

- Handle in `useEffect` / `useLayoutEffect` (functional) or lifecycle methods (class).
- Keep render pure: No side effects in render body.

Best practices :

- Fetch data in effects with deps (e.g., [userId])
- Use async/await or promises inside effects
- Avoid infinite loops: Include all used values in deps
- For server components (React 18+), use Suspense for data fetching

Example : Debounced search

```jsx
useEffect(() => {
  const timeout = setTimeout(() => {
    fetch(`/api/search?q=${query}`);
  }, 300);
  return () => clearTimeout(timeout);
}, [query]);
```

---

## 151. Cleanup Logic :

- Cleanup prevents resource leaks (e.g., open sockets, intervals, event listeners).

In `useEffect` :

- Return a function from the callback.
- Runs before next effect or on unmount.

In classes : `componentWillUnmount` / `componentDidUpdate` (manual).

Common cleanups :

- `clearInterval` / `clearTimeout`
- Remove event listeners: `window.removeEventListener`
- Cancel fetches: `AbortController`
- Close WebSockets/subscriptions

Example with AbortController :

```jsx
useEffect(() => {
  const controller = new AbortController();
  fetch("/api/data", { signal: controller.signal })
    .then((res) => res.json())
    .then(setData)
    .catch((err) => {
      if (err.name !== "AbortError") console.error(err);
    });

  return () => controller.abort();
}, []);
```

- Always implement cleanup for effects that create ongoing resources.

---
