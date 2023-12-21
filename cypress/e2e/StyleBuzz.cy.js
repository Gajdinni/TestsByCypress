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


describe('Login and Password', () => {
  it('Correct Login', () => {
    cy.fixture('example.json').then((example) => {
      const {username, password } = example.exampleCredentials;

    cy.visit('http://localhost:3000/login')
      .get('input[name="username"]').type(username)
      .get('input[name="password"]').type(password)
      .get('button[type="submit"]').click()
      .visit('/')
    })
    
    cy.fixture('example.json').then((example1) => {
      const { username1, password1 } = example1.
    example1;
    cy.visit('http://localhost:3000/login')
      .get('input[name="username"]').type(username1)
      .get('input[name="password"]').type(password1)
      .get('button[type="submit"]').click()
      .visit('/')
    })
    
    cy.fixture('example.json').then((example2) => {
      const { username2, password2 } = example2.example2;
    cy.visit('http://localhost:3000/login')
      .get('input[name="username"]').type(username2)
      .get('input[name="password"]').type(password2)
      .get('button[type="submit"]').click()
      .visit('/')
    })
    
    cy.fixture('example.json').then((exampleC) => {
      const { username3, password3 } = exampleC.
    exampleCorrect;
    cy.visit('http://localhost:3000/login')
      .get('input[name="username"]').type(username3)
      .get('input[name="password"]').type(password3)
      .get('button[type="submit"]').click()
    })
  })
})
