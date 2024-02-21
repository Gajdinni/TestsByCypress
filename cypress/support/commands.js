Cypress.Commands.add("inputUsername", (username) => {
  cy.get('input[name="username"]').type(username);
});

Cypress.Commands.add("inputPassword", (password) => {
  cy.get('input[name="password"]').type(password);
});

Cypress.Commands.add("loginSelector", (username, password) => {
  cy.visit("/login");
  cy.checkLoginElements();
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("emptyLogin", () => {
  cy.visit("/login");
  cy.checkLoginElements();
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("emptyPassword", (username) => {
  cy.visit("/login");
  cy.checkLoginElements();
  cy.get('input[name="username"]').type(username);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("emptyUsername", (password) => {
  cy.visit("/login");
  cy.checkLoginElements();
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("addArticle", () => {
  cy.get('input[name="title"]').then(($input) => {
    if (!$input.val()) {
      cy.get('input[name="title"]').type("Testowy nagłówek");
    }
  });
  cy.get('textarea[name="content"]').then(($textarea) => {
    if (!$textarea.val()) {
      cy.get('textarea[name="content"]').type("Testowa treść artykułu");
    }
  });
  cy.wait(15000);
});

Cypress.Commands.add("addArticleFromFile", (exampleArticle) => {
  cy.get('input[name="title"]').type(exampleArticle.title);
  cy.get('textarea[name="content"]').type(exampleArticle.content);
});

Cypress.Commands.add("checkLoginElements", () => {
  cy.get('input[name="username"]').should("exist").and("be.visible");
  cy.get('input[name="password"]').should("exist").and("be.visible");
  cy.get('button[type="submit"]').should("exist").and("be.visible");
});

Cypress.Commands.add("checkNavbarElements", () => {
  cy.get(".navbar").should("exist").and("be.visible");
  cy.get(".navbar .nav-link").should("exist").and("be.visible");
  cy.get(".navbar .navbar-brand").should("exist").and("be.visible");
});

Cypress.Commands.add("checkCardElements", () => {
  cy.get(".card").should("exist").and("be.visible");
  cy.get(".card .card-body").should("exist").and("be.visible");
  cy.get(".card .card-text").should("exist").and("be.visible");
  cy.get(".card .card-title").should("exist").and("be.visible");
});

Cypress.Commands.add("checkMainElements", () => {
    cy.checkNavbarElements();
    cy.checkCardElements();
});
