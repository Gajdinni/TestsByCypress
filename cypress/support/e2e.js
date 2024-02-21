// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.

// cypress/integration/login_spec.js
beforeEach(() => {
  cy.intercept('GET', '/').as('getRequest');
  cy.visit('/');
  cy.wait('@getRequest')
  cy.get('@getRequest').then(res => {
  console.log(res)
  expect(res.response.statusCode).to.equal(200)
 });
});


// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './buttonSelectors'

// Alternatively you can use CommonJS syntax:
// require('./commands')


afterEach(() => {
    cy.log('I run after every test in every spec file')
  })