describe('Testing the endpoint', () => {
    it('Should return the correct response', () => {
      // Send an HTTP request to the endpoint
      cy.request('GET', '/login')
        .then((response) => {
          // Check if the response has the expected status code
          expect(response.status).to.eq(200)
        })
    })
})


describe('Intercept Tests', () => {
    it('Use Intercept', () => {
      cy.intercept('GET', '/login').as('getAllUsers')
      cy.intercept('POST', '/login').as('createUser')
      cy.intercept('POST','/login', {fixture: 'users.json'}).as
  ('createUserWithFixture')
      cy.visit('/login')
      cy.wait('@getAllUsers')
    })
   // Checks whether request intercept works correctly for GET and POST requests to the '/login' endpoint, waits for the GET request to complete
})


