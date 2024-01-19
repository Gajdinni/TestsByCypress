import 'cypress-axe'


describe('Accessibility Tests', () => {
    it('Should pass accessibility tests', () => {
      // start accessibility tests
      cy.injectAxe() // This is example - customize options
      cy.checkA11y(null, {includedImpacts: ['critical']}) 
      // This is example - customize options
    })
})
  