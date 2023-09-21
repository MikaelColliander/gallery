# Code Assignment - Gallery Viewer

## Description
Gallerey Viewer is a web based interface where users can assimilate information from large amounts of data, presented in a comprehensible fashion. In its first iteration Gallery Viewer has been adapted to showcase coworkers of the Tretton37 organisation which consists of a several hundred employees. Switch between different view modes and filter your results for easy access to the desired information.

## Code Design
Gallery Viewer is written in React with TypeScript and bundled with Vite. The application makes use of a provider architecture. There is a data provider, responsible for fetching and storing data. Any child component wrapped within a data provider has acces to the data via a hook that can be initialized in the child component. One advantage with using data providers is that children may mount and unmount throughout the application life cycle without having to refetch any data that has already been fetched by the wrapping data provider.

You may categorize a data provider as a container component - a component that has a close relation to the business domain. On the other end of the spectrum there are the ui building blocks. They are purposely left in the dark when it comes to domain knowledge, and only receive data on a need tho know/render basis.

The concept of keeping container components and ui components separate, facilitates reuse of the code base as the ui components do not require domain specific signatures and contracts.

## Installed packages

### React
React is the most used javascript framework there is. It has become a de facto standard framework for web development. An application written in React has great expectations of finding someone to further its development as the code base should be rather familiar to most web devs.

### Vite
Dev server and building/bundling is handled by Vite. Vite dev server is fast and it is also very quick and easy to get started as it offers ready made scaffolding with React that allows you to get up and running with just a few commands, from your terminal.

### TypeScript
The application is written in TypeScript. TypeScript gives you a nice integration with you IDE and make you aware of errors already as the code is being written. It also helps prevent bugs that might not appear at development time. Another nice effect of using TypeScript is that it provides hints for yourself and other developers on how to implement written code.

### Postcss plugins
Postcss - even though the future seem to be upon us already, Postcss allows us to write CSS from the future. Gallery viewer uses the plugins postcssCustomMedia and postcssMixins.

Postcss Custom Media allows you to keep media queries as custom properties/variables which allows for consistency when writing the adaptive/responsive design aspects of an application.

Postcss Mixins provides the possibility to reuse chunks of CSS, it’s also possible pass arguments to a mixin which allows for some great dynamics. Gallery Viewer utilizes mixins to make chunks of CSS portable throughout the application. Mixins in the regard could be interchangeable with the @extend rule but I found the mixing plugin to be more reliable than the Postcss extends plugin.

## Feature aim 

### Responsive Design
It’s such an integral part of any web development workflow. I would like to say that most users, in general, access the web via a small screen. But then, designing with a mobile first approach, one might say that responsive design accommodates for desktop users to also have a great experience.

### Modern CSS
Thanks for hinting towards Grid and Clamp. I’ve been rather caught up in @mui for the last while so I took the opportunity to go back to some basic CSS-handling and also acquainted myself with some more modern CSS features. It was rather joyous. Variables in CSS is the best thing to have been invented since färdigskrivet bröd, and I’ve been using them for years with preprocessors. I only wish I had been more thorough here since there are still a lot of hardcoded values throughout.

### Filter by name and office
I like to build things. The aspect of creating was what drew me to this line of work to begin with. Implementing functionality is the meat and potatoes of development. The filtering of results also made sense to implement, since it would make the content more accessible. I even found some familiar faces!

### Switch view mode
The ability to switch between a better overview and a more detailed view can greatly enhance the user experience. I found it to be a core part of the features. It’s also rather satisfying to have the ui change radically with the push of a button.

### Use TypeScript
As with responsive design, TypeScript is just an integral part of any modern web development workflow. When I work as a lone developer, as with this assignment, I find myself writing, say a ui component, then when I implement it I just let the IDE fill in a skeleton of props. This says something of the role TypeScript can play for an app with a whole team of developers.

## Get started

- Clone the repository
- Create a .env file containing a variable for the api key: VITE_API_KEY=\<api-key\>
- Run npm install from repository root
- Run npm run dev to start the dev server

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
