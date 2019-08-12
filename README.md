# ng devops

[![Travis (.org)](https://img.shields.io/travis/codemastermick/ng-devops)](https://travis-ci.org/codemastermick/ng-devops)
[![Website](https://img.shields.io/website/http/dev-profile-cd9ed.web.app?down_color=red&down_message=offline&up_message=up)](https://dev-profile-cd9ed.web.app)
[![GitHub issues](https://img.shields.io/github/issues/codemastermick/ng-devops)](https://github.com/codemastermick/ng-devops/issues)

[![codecov](https://codecov.io/gh/codemastermick/ng-devops/branch/master/graph/badge.svg)](https://codecov.io/gh/codemastermick/ng-devops)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b091e9b3211a491bbf949b60dcf2011a)](https://www.codacy.com/app/codemastermick/ng-devops?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=codemastermick/ng-devops&amp;utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/d17298f06631349f0f8c/maintainability)](https://codeclimate.com/github/codemastermick/ng-devops/maintainability)
[![Greenkeeper badge](https://badges.greenkeeper.io/codemastermick/ng-devops.svg)](https://greenkeeper.io/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This project is an Angular 8 app with a focus on making the actual development process easier by leaving all the menial tasks to clever scripts, git hooks and Travis CI

## Getting Started

To get started with this project you will need to do a few things first to enable all the features of the CI pipeline. For a more detailed explanation of the steps you can check the wiki out on [First Steps](https://github.com/codemastermick/ng-devops/wiki/First-Steps).

Create an account with Travis CI if you don't have one, then enable this repository to get started with the basic pipeline.

Set up an account with Firebase if you do not already have one, then set up a new project and enable hosting. Copy your firebase login:ci token into Travis using the method of your choice and automatic deployment will be enabled.

Set up an account with Codecov if you do not already have one, then enable this repository on your dashboard. Once everything is set up, grab a copy of your project token and put it into Travis in your usual way. Codecov coverage reports are now enabled.

Set up an account with Codacy if you don't have one, enable this repository, copy the project token into Travis, and you will have Codacy reviewing your coverage reports as well.

## Development server

Run `npm run start` for a dev server then navigate to `http://localhost:4200/` . The server will automatically reload if you change any of the source files within the app. When this command is run, git fetch and git pull will execute first, then after the server is shut down the project will automatically fix any linting issues.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module` .

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/<APP-NAME>` directory. Use the `npm run build:prod` flag for a production build.

## Unit tests

Unit testing is handled by Travis, but can be manually invoked by using `npm run test` or `npm run test:ci` for headless testing.

## Test Coverage

Coverage reports are automatically generated and uploaded to Codecov and Codacy by Travis every time a build succeeds.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deployment

Travis will automatically deploy successful builds on the master branch to Firebase hosting once the token is added to Travis's environment variables as FIREBASE_TOKEN. To obtain this token, cd into the project directory and use `firebase login:ci` to start the process. Once you have finished logging in and have returned to the command line you will see a long string displayed that you can copy into Travis as FIREBASE_TOKEN.

### Please note that this token should be kept secure and therefore should either be added directly through the web interface or using travis encrypt then adding it to your travis.yml file
