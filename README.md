# Login and Subscription Demo App
## This is a demo project using Angular 6, TypeScript and webpack 4

## Running app locally

### Install following dependencies:

* Node.js: v8.10.0
* npm: v6.4.1

### Run the app 
Webpack 4.8 is used to transpile typescript code and bundle Angular 6 modules. 
webpack-dev-server is used to run the app locally
use the following command will install related dependencies and dev-depenencies and start app on [localhost](http://localhost:8080)
```
npm install 
npm start
```
### Run the mock backend
clone the backend https://github.com/jctampere/demo-backen-end
use the following command to start mocked backend
```
npm install 
npm start
```
### Test account
email: test@gmail.com
password: test

## Heroku deploy
Try the app on heroku with url: https://dna-demo-app.herokuapp.com/login
But working is not guaranteed

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
