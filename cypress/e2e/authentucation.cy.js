describe('Basic Authentication', () => {
    it('Authentication', () => {
     cy.visit('/login', {
       auth: {
         username: 'tomo',
         password: 'tomo',
       }
     })
    })
 })


describe('Login and Password', () => {
  it('Correct Login and Password', () => {
    cy.fixture('users.json').then((example) => {
    const {username, password} = example.exampleCredentials
    cy.visit('/login')
      .get('input[name="username"]').type(username)
      .get('input[name="password"]').type(password)
      .get('button[type="submit"]').click()
      .visit('/')
    })
    /// example, incorrect login and password

    cy.fixture('users.json').then((example1) => {
      const {username1, password1} = example1.example1
    cy.visit('/login')
      .get('input[name="username"]').type(username1)
      .get('input[name="password"]').type(password1)
      .get('button[type="submit"]').click()
      .visit('/')
    })
    /// example, incorrect login and password

    cy.fixture('users.json').then((example2) => {
      const {username2, password2} = example2.example2
    cy.visit('/login')
      .get('input[name="username"]').type(username2)
      .get('input[name="password"]').type(password2)
      .get('button[type="submit"]').click()
      .visit('/')
    })
    /// example, incorrect login and password

    cy.fixture('users.json').then((exampleC) => {
      const {username3, password3} = exampleC.exampleCorrect
    cy.visit('/login')
      .get('input[name="username"]').type(username3)
      .get('input[name="password"]').type(password3)
      .get('button[type="submit"]').click()
    })
    /// correct login and password
  })
})


describe('Empty login and password', () => {
  it('EmptyTest', () => {
    cy.visit('/login')
      .get('button[type="submit"]').click()
    cy.fixture('users.json').then((exampleC) => {
      const {username3, password3} = exampleC.exampleCorrect
    cy.visit('/login')
      .get('input[name="username"]').type(username3)
      .get('button[type="submit"]').click()
    cy.visit('/login')
      .get('input[name="password"]').type(password3)
      .get('button[type="submit"]').click()
    })
    /// empty login and password, only empty password, only empty login
  })
})