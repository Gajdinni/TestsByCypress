describe('CallBack', () => {
    it('Correct', () => {
      cy.visit('/#dashboard', {
        onBeforeLoad: (contentWindow) => {
    // contentWindow is the remote page's window object
     },
   })
  })
})