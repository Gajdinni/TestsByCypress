describe('Checking buttons', () => {
    it('correct operation of buttons', () => {
       cy.get('.card').eq(0).click();
       cy.get('.navbar-brand').click();
       cy.get('.card').eq(1).click();
       cy.get('.navbar-brand').click();
       cy.viewport('iphone-8');
       cy.get('.navbar-toggler').click();
       cy.viewport(1280, 720);
       cy.get('.nav-link').eq(0).click();
       cy.get('.navbar-brand').click();
       cy.get('.nav-link').eq(1).click();
       cy.get('.navbar-brand').click();
       cy.get('.card').eq(0).click();
       cy.get('.nav-link').eq(0).click();
       cy.get('.card').eq(0).click();
       cy.get('.nav-link').eq(1).click();
       cy.get('.navbar-brand').click();
       cy.get('.card').eq(1).click();
       cy.get('.nav-link').eq(0).click();
       cy.get('.card').eq(1).click();
       cy.get('.nav-link').eq(1).click();
    //this checks how the application buttons work
    })
})


describe('HiTest', () => {
    it('LoginHi', () => {
        cy.contains('Login').click();
        cy.fixture('users.json').then((exampleC) =>
        {const { username3, password3 } = exampleC.exampleCorrect
        cy.get('input[name="username"]').type(username3);
        cy.get('input[name="password"]').type(password3);
        cy.get('button[type="submit"]').click();
      })
        cy.contains('Hi').should('be.visible');
        cy.url().should('include','/');
        cy.get('.card:contains("test")').eq(0).click();
        cy.contains('Hi').should('be.visible');
        cy.url().should('include','/');
    // test case for a login functionality and checks if the some text is visible on the page and the URL still contains '/'
    });
});


describe('Add Article', () => {
    it('AddArt', () => {
      cy.get('.nav-link').eq(1).click();
      cy.fixture('users.json').then((exampleC) => {
         const { username3, password3 } = exampleC.exampleCorrect
      cy.get('input[name="username"]').type(username3);
      cy.get('input[name="password"]').type(password3);
      cy.get('button[type="submit"]').click()
    });
      cy.visit('/admin');
      cy.contains('Add article').click();
      cy.get('input[name="title"]').type('Testowy nagłówek Tom');
      cy.get('textarea[name="content"]').type('Treść artykułu Tom');
      cy.get('button[type="submit"]').click();
      cy.visit('/');
      cy.contains('Testowy nagłówek Tom').click();
    // this adds the article to the application and checks whether it has been added
    });
});


describe('AddArtcilesFromFile', () => {
  it('FromfileJSON', () => {
    cy.fixture('articles.json').then((articles) => {
      const {username0, password0, exampleArticle0} = articles
    cy.contains('Login').click();
    cy.get('input[name="username"]').type(username0);
    cy.get('input[name="password"]').type(password0);
    cy.get('button[type="submit"]').click();
    cy.visit('/admin');
    cy.contains('Add article').click();
    cy.get('input[name="title"]').type(exampleArticle0.title);
    cy.get('textarea[name="content"]').type(exampleArticle0.content);
    cy.get('button[type="submit"]').click();
    cy.visit('/');
    cy.contains('TestTom').click();
   // this test suite logs in, adds a new article from a JSON file in the admin section and verifies the created article on the homepage.
    });
  });
});
