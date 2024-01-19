describe('Task Tests', () => {
    it('Use Task', () => {
      cy.task('hello', { greeting: 'Hello', name: 'World' })
      .visit('/')
    })
})