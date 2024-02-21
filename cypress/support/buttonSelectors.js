Cypress.Commands.add("clickButton", () => {
  cy.get("button").click();
});

Cypress.Commands.add("clickLoginButton", () => {
  cy.contains("button", "Log in").click();
});

Cypress.Commands.add("clickNavbar", () => {
    cy.get(".navbar").should("exist").click()
});

Cypress.Commands.add("clickNavlink", () => {
    cy.get(".navbar .nav-link").should("exist").contains
("Home").click();
    cy.visit("/");
    cy.get(".navbar .nav-link").should("exist").contains
("Login").click();
});

Cypress.Commands.add("clickNavbarBrand", () => {
    cy.get(".navbar .navbar-brand").should("exist").
click()
});

Cypress.Commands.add("clickNavbarToggler", () => {
  cy.viewport("iphone-8");
  cy.get(".navbar-toggler").should("exist").click();
});

Cypress.Commands.add("clickNavAll", () => {
  cy.get(".navbar").should("exist").click();
  cy.visit("/");
  cy.get(".navbar .nav-link").should("exist").contains
("Home").click();
  cy.visit("/");
  cy.get(".navbar .nav-link").should("exist").contains
("Login").click();
  cy.visit("/");
  cy.get(".navbar .navbar-brand").should("exist").click
();
  cy.visit("/");
  cy.viewport("iphone-8");
  cy.get(".navbar-toggler").should("exist").click();
  cy.viewport(1280, 720);
});

Cypress.Commands.add("clickCardBody", () => {
  cy.get(".card .card-body").should("exist").eq(0).click
();
});

Cypress.Commands.add("clickCardTitle", () => {
  cy.get(".card .card-title").should("exist").eq(0).
click();
});

Cypress.Commands.add("clickCardText", () => {
  cy.get(".card .card-text").should("exist").eq(0).click
();
});

Cypress.Commands.add("clickCardAll", () => {
  cy.get(".card .card-body").should("exist").eq(0).click
();
  cy.visit("/");
  cy.get(".card .card-title").should("exist").eq(0).
click();
  cy.visit("/");
  cy.get(".card .card-text").should("exist").eq(0).click
();
});

Cypress.Commands.add("clickNavCard", () => {
  cy.clickNavAll();
  cy.visit("/");
  cy.clickCardAll();
});


Cypress.Commands.add("clickManyTimes", () => {
  cy.wrap(Array(10).fill(null)).each(() => {
    cy.contains("Home").click();
  });
  cy.wrap(Array(10).fill(null)).each(() => {
    cy.contains("StyleBuzz").click();
  });
})