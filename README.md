# JS-Seed

Basic seed project for building JS apps using ES6. Includes the following tools

* Webpack for module bundling
* ESLint for linting
* Jasmine for testing

##Usage
1. Clone the repository: `git clone git@github.com:doque/js-seed.git`
2. Set up dependencies `cd js-seed; npm install`
3. Webpack Entry point is in `index.js`, JS code should go in `src`. Webpack will only look for modules inside `node_modules`.
4. Tests go in `test` directory.


##Commands:

* `npm run build` builds the entire project. Entry point is `index.js`, target is `dist/bundle.js`.
* `npm run test` runs jasmine with `test/` base directory for all specs.
* `npm run lint` lints all `.js` files.

