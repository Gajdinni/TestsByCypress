describe('Checking buttons', () => {
    it('correct operation of buttons', () => {
       cy.get('.card').eq(0).click()
         .get('.navbar-brand').click()
         .get('.card').eq(1).click()
         .get('.navbar-brand').click()
         .viewport('iphone-8')
         .get('.navbar-toggler').click()
         .viewport(1280, 720)
         .get('.nav-link').eq(0).click()
         .get('.navbar-brand').click()
         .get('.nav-link').eq(1).click()
         .get('.navbar-brand').click()
         .get('.card').eq(0).click()
         .get('.nav-link').eq(0).click()
         .get('.card').eq(0).click()
         .get('.nav-link').eq(1).click()
         .get('.navbar-brand').click()
         .get('.card').eq(1).click()
         .get('.nav-link').eq(0).click()
         .get('.card').eq(1).click()
         .get('.nav-link').eq(1).click()
    //this checks how the application buttons work
    })
})


describe('HiTest', () => {
    it('LoginHi', () => {
        cy.contains('Login').click()
        cy.fixture('users.json').then((exampleC) =>
        {const { username3, password3 } = exampleC.exampleCorrect
        cy.get('input[name="username"]').type(username3)
          .get('input[name="password"]').type(password3)
          .get('button[type="submit"]').click()
      })
        cy.contains('Hi').should('be.visible')
          .url().should('include','/')
          .get('.card:contains("test")').eq(0).click()
        cy.contains('Hi').should('be.visible')
          .url().should('include','/')
    // test case for a login functionality and checks if the some text is visible on the page and the URL still contains '/'
    })
})


describe('Add Article', () => {
    it('AddArt', () => {
      cy.get('.nav-link').eq(1).click()
      cy.fixture('users.json').then((exampleC) => {
         const { username3, password3 } = exampleC.exampleCorrect
      cy.get('input[name="username"]').type(username3)
        .get('input[name="password"]').type(password3)
        .get('button[type="submit"]').click()
    })
      cy.visit('/admin')
      cy.contains('Add article').click()  
      cy.get('input[name="title"]').type('Testowy nagłówek Tom')
      cy.get('textarea[name="content"]').type('Treść artykułu Tom')
      cy.get('button[type="submit"]').click()
      cy.visit('/')
      cy.contains('Testowy nagłówek Tom').click()
    // this adds the article to the application and checks whether it has been added
    })
})


describe('AddArtcilesFromFile', () => {
  it('FromfileJSON', () => {
    cy.fixture('articles.json').then((articles) => {
      const {username0, password0, exampleArticle0} = articles
    cy.contains('Login').click()
      .get('input[name="username"]').type(username0)
      .get('input[name="password"]').type(password0)
      .get('button[type="submit"]').click()
    cy.visit('/admin')
      .contains('Add article').click()
      .get('input[name="title"]').type(exampleArticle0.title)
      .get('textarea[name="content"]').type(exampleArticle0.content)
      cy.get('button[type="submit"]').click()
      cy.visit('/')
      cy.contains('TestTom').click()
    })
  })
})
