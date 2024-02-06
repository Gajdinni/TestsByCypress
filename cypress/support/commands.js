Cypress.Commands.add('inputUsername', (username) => {
    cy.get('input[name="username"]').type(username);
});

Cypress.Commands.add('inputPassword', (password) => {
    cy.get('input[name="password"]').type(password);
});

Cypress.Commands.add('clickLoginButton',() => {
    cy.contains('button', 'Log in').click();
});

Cypress.Commands.add('clickButton', () => {
    cy.get('button').click();
});

Cypress.Commands.add('loginSelector', (username, 
    password) => {
        cy.visit('/login');
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();
});
    
Cypress.Commands.add('emptyLogin', () => {
        cy.visit('/login');
        cy.get('button[type="submit"]').click();
});
      
Cypress.Commands.add('emptyPassword', (username) => {
        cy.visit('/login');
        cy.get('input[name="username"]').type(username);
        cy.get('button[type="submit"]').click();
});
      
Cypress.Commands.add('emptyUsername', (password) => {
        cy.visit('/login');
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('addArticle', () => {
    cy.get('input[name="title"]').type('Testowy nagłówek');
    cy.get('textarea[name="content"]').type('Testowa treść artykułu');
});

Cypress.Commands.add('addArticleFromFile', (exampleArticle) => {
    cy.get('input[name="title"]').type(exampleArticle.title);
    cy.get('textarea[name="content"]').type(exampleArticle.content);
});