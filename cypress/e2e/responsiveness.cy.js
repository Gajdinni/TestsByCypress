describe('Responsive Tests', () => {
    it('Mobile Device Responsiveness', () => {
      cy.viewport('iphone-8')
      cy.visit('/')
      // Test visibility and layout of elements on a mobile device
    })
  
    it('Tablet Responsiveness', () => {
      cy.viewport('macbook-15')
      cy.visit('/')
      // Test visibility and layout of elements on a tablet
    })
  
    it('Desktop Screen Responsiveness', () => {
      cy.viewport(1280, 720) // Adjust size as needed
      cy.visit('/')
      // Test visibility and layout of elements on a desktop screen
    })
})
  