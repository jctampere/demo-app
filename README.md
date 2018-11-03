# Login and Subscription Demo App
## This is a demo project using Angular 6, TypeScript and webpack 4

## Running app locally
Webpack 4.8 is used to transpile typescript code and bundle Angular 6 modules. 
webpack-dev-server is used to run the app locally
use the following command will install related dependencies and dev-depenencies and start app on [localhost](http://localhost:8080)
```
npm install 
npm start
```

## Tests 
Tests are done with karma test runner and jasmine test framework
```
npm test
```

# Project structure
```
src
+-- app
|   +-- components
|   |   +-- login
|   |   +-- subscription-detail
|   |   +-- subscriptions
|   |   +-- subscription-table
|   |   +-- title-area
|   +-- services
|   +-- assets
|   +-- index.html
|   +-- main.ts
|   +-- polyfills.ts
|   +-- styles.css
+-- webpack.config
+-- webpack.test.js
+-- tsconfig.json
+-- karma.conf.js
+-- package.json
```
