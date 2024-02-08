import users from "/Cypress/cypress/fixtures/users.json";

describe("The Home Page", () => {
  it("Successfully loads", () => {
    cy.visit("/articles/3") // first subpage
      .visit("/") // back to home
      .visit("/articles/4") // second subpage
      .visit("/") // back to home
      .visit("/login"); // login subpage
  });
});

describe("Scroll Tests", () => {
  it("Should scroll the page", () => {
    cy.scrollTo("bottom").scrollTo("top");
  });
});

describe("buttonTests", () => {
  it("Check Buttons on the Main", () => {
    cy.clickNavbar();
    cy.clickNavbarBrand();
    cy.clickNavlink();
    cy.clickNavbarToggler();
    cy.viewport(1280, 720);
    const { username3, password3 } = users.exampleCorrect;
    cy.loginSelector(username3, password3);
    cy.clickCardBody();
    cy.visit("/");
    cy.clickCardTitle();
    cy.visit("/");
    cy.clickCardText();
  });
});

describe("buttonOneSelectorTest", () => {
  it("Check Buttons one the Main Again", () => {
    cy.clickCardAll();
    cy.clickNavAll();
    cy.clickNavCard();
  });
});
