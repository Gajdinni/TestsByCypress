describe('The Home Page', () => {
    it('Successfully loads', () => {
     cy.visit('/articles/3') // first subpage
     .visit('/') // back to home
     .visit('/articles/4') // second subpage
     .visit('/') // back to home
     .visit('/login') // login subpage
    })
})