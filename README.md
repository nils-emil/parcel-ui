# ParcelUi


<p align="center">
  <a href="https://angular.io/" target="blank"><img src="https://angular.io/assets/images/logos/angular/angular.svg" width="200" alt="Angular Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.


## Missing features & possible improvements

* The design is awful
* Would be nice loading table/submitting form would show a spinner when the request is being processed.
* Would be nice if the table was updated after the form is submitted.
* Having a good test setup
  - Would be nice to have a test setup, using Cypress or alternative, that would test the application from the user's perspective.
* Configuration via .env file
  - The API URL should come from a .env file [like this](https://github.com/nils-emil/resto-order-client-ui/blob/master/Dockerfile)
  - Currently the API URL is hardcoded in the ParcelService file :(
* Having a production build
* Having a linter setup
* Showing a more specific error when the form field is invalid

## Development server

Run `npm i` &&  run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
