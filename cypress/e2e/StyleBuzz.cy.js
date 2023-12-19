describe('The Home Page', () => {
  it('Successfully loads', () => {
   cy.visit('/') // yields the window object
   .visit('http://localhost:3000/articles/3') // first subpage
   .visit('/') // back to home
   .visit('http://localhost:3000/articles/4') // second subpage
   .visit('/') // back to home
   .visit('http://localhost:3000/login') // login subpage
   .visit('/') // back to home
  })
})


describe('Basic Authentication', () => {
   it('/', () => {
    cy.visit('http://localhost:3000/login', {
      auth: {
        username: 'tomo',
        password: 'tomo',
      }
    })
   })
})

describe('LoadTimeout', () => {
  it('Correct', () => {
    // Wait 30 seconds for page 'load' event
   cy.visit('http://localhost:3000/login', { timeout: 30000 })
  })
})


describe('CallBack', () => {
  it('Correct', () => {
    cy.visit('http://localhost:3000/#dashboard', {
      onBeforeLoad: (contentWindow) => {
      // contentWindow is the remote page's window object
  },
})
  })
})