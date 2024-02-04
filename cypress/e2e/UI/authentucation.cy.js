describe('Basic Authentication', () => {
    it('Authentication', () => {
     cy.visit('/login', {
       auth: {
         username: 'tomo',
         password: 'tomo',
       }
     });
    });
 });


describe('Login and Password', () => {
  beforeEach(() => {
    cy.intercept('GET', '/login').as('getRequest');
  });
  it('Correct Login and Password', () => {
    cy.fixture('users.json').then((example) => {
    const {username, password} = example.exampleCredentials
    cy.visit('/login');
    cy.wait('@getRequest')
    cy.get('@getRequest').then(res => {
      console.log(res)
      expect(res.response.statusCode).to.equal(200)
      cy.get('button:contains("Log in")').should('exist');
    });
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.visit('/');
    });
    // example, incorrect login and password
    // capture the GET input on the path
    
    cy.fixture('users.json').then((example1) => {
      const {username1, password1} = example1.example1
    cy.visit('/login');
    cy.get('input[name="username"]').type(username1);
    cy.get('input[name="password"]').type(password1);
    cy.get('button[type="submit"]').click();
    cy.visit('/');
  });

    cy.fixture('users.json').then((example2) => {
      const {username2, password2} = example2.example2
    cy.visit('/login');
    cy.get('input[name="username"]').type(username2);
    cy.get('input[name="password"]').type(password2);
    cy.get('button[type="submit"]').click();
    cy.visit('/');
    });
    /// example, incorrect login and password

    cy.fixture('users.json').then((exampleC) => {
      const {username3, password3} = exampleC.exampleCorrect
    cy.visit('/login');
    cy.get('input[name="username"]').type(username3);
    cy.get('input[name="password"]').type(password3);
    cy.get('button[type="submit"]').click();
    });
    /// correct login and password
  });
});


describe('Empty login and password', () => {
  it('EmptyTest', () => {
    cy.visit('/login');
    cy.get('button[type="submit"]').click();
    cy.fixture('users.json').then((exampleC) => {
      const {username3, password3} = exampleC.exampleCorrect
    cy.visit('/login');
    cy.get('input[name="username"]').type(username3);
    cy.get('button[type="submit"]').click();
    cy.visit('/login');
    cy.get('input[name="password"]').type(password3);
    cy.get('button[type="submit"]').click();
    });
    /// empty login and password, only empty password, only empty login
  });
});