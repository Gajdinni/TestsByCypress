Cypress.Commands.add("inputUsername", (username) => {
  cy.get('input[name="username"]').type(username);
});

Cypress.Commands.add("inputPassword", (password) => {
  cy.get('input[name="password"]').type(password);
});

Cypress.Commands.add("clickLoginButton", () => {
  cy.contains("button", "Log in").click();
});

Cypress.Commands.add("clickButton", () => {
  cy.get("button").click();
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

Cypress.Commands.add("clickNavbar", () => {
    cy.get(".navbar").should("exist").click()
});

Cypress.Commands.add("clickNavlink", () => {
    cy.get(".navbar .nav-link").should("exist").contains("Home").click();
    cy.visit("/");
    cy.get(".navbar .nav-link").should("exist").contains("Login").click();
});

Cypress.Commands.add("clickNavbarBrand", () => {
    cy.get(".navbar .navbar-brand").should("exist").click()
});

Cypress.Commands.add("clickNavbarToggler", () => {
  cy.viewport("iphone-8");
  cy.get(".navbar-toggler").should("exist").click();
});

Cypress.Commands.add("clickNavAll", () => {
  cy.get(".navbar").should("exist").click();
  cy.visit("/");
  cy.get(".navbar .nav-link").should("exist").contains("Home").click();
  cy.visit("/");
  cy.get(".navbar .nav-link").should("exist").contains("Login").click();
  cy.visit("/");
  cy.get(".navbar .navbar-brand").should("exist").click();
  cy.visit("/");
  cy.viewport("iphone-8");
  cy.get(".navbar-toggler").should("exist").click();
  cy.viewport(1280, 720);
});

Cypress.Commands.add("clickCardBody", () => {
  cy.get(".card .card-body").should("exist").eq(0).click();
});

Cypress.Commands.add("clickCardTitle", () => {
  cy.get(".card .card-title").should("exist").eq(0).click();
});

Cypress.Commands.add("clickCardText", () => {
  cy.get(".card .card-text").should("exist").eq(0).click();
});

Cypress.Commands.add("clickCardAll", () => {
  cy.get(".card .card-body").should("exist").eq(0).click();
  cy.visit("/");
  cy.get(".card .card-title").should("exist").eq(0).click();
  cy.visit("/");
  cy.get(".card .card-text").should("exist").eq(0).click();
});

Cypress.Commands.add("clickNavCard", () => {
  cy.clickNavAll();
  cy.visit("/");
  cy.clickCardAll();
});


// podziel selectory na kategorie