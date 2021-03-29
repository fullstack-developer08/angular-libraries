# Description
This project is developed using Angular and It is not web application, It is angular library workspace and it contains source of angular libraries.

## Contains Angular Libraries
### spinner
### angular-draggable

## prerequisite 
Install the npm package libraries.

`npm install`

## Build 
we should always build package with --prod command otherwise angular web application will not compile properly.

`ng build spinner --prod`

`ng build angular-draggable --prod`

## Publishing

After building your library with `ng build angular-draggable --prod`, go to the dist folder `cd dist/angular-draggable` and run `npm publish`.
After building your library with `ng build spinner --prod`, go to the dist folder `cd dist/spinner` and run `npm publish`.


## Running unit tests

Run `ng test angular-draggable` to execute the unit tests via [Karma](https://karma-runner.github.io).

`ng test spinner`
