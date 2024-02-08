import users from '/Cypress/cypress/fixtures/users.json'
import articles from '/Cypress/cypress/fixtures/articles.json'


describe("HiTest", () => {
  it("LoginHi", () => {
    cy.contains("Login").click();
    cy.checkLoginElements();
      const { username3, password3 } = users.exampleCorrect;
      cy.inputUsername(username3);
      cy.inputPassword(password3);
      cy.clickLoginButton();
    cy.contains("Hi").should("be.visible");
    cy.url().should("include", "/");
    cy.get('.card:contains("test")').eq(0).click();
    cy.contains("Hi").should("be.visible");
    cy.url().should("include", "/");
    // test case for a login functionality and checks if the some text is visible on the page and the URL still contains '/'
  });
});

describe('Add Article', () => {
    it('AddArt', () => {
      cy.contains('Login').click();
      cy.checkLoginElements();
         const { adminName, adminPassword } = users.Admin
      cy.inputUsername(adminName);
      cy.inputPassword(adminPassword);
      cy.clickLoginButton();
      cy.visit('/admin');
      cy.contains('Add article').click();
      cy.addArticle();
      cy.contains('Create Article').click();
      cy.visit('/');
      cy.checkMainElements();
      cy.contains('Testowy nagłówek Tom').click();
    // this adds the article to the application and checks whether it has been added
    });
});

describe("AddArtcileFromFile", () => {
  it("FromfileJSON", () => {
      cy.intercept("GET", "/admin").as("getAdmin");
      const { adminName, adminPassword, } = users.Admin;
      cy.contains("Login").click();
      cy.checkLoginElements();
      cy.inputUsername(adminName);
      cy.inputPassword(adminPassword);
      cy.clickLoginButton();
      cy.wait("@getAdmin");
      cy.get("@getAdmin").then(res => {
        console.log(res)
        expect(res.response.statusCode).to.equal(200);
      });
      cy.visit("/admin");
      cy.wait("@getAdmin");
      cy.get("@getAdmin").then(res => {
        console.log(res)
        expect(res.response.statusCode).to.equal(200);
      })
      cy.intercept("GET", "/admin/add-article").as("getArticle")
      cy.contains("Add article").click();
      cy.wait("@getArticle");
      cy.get("@getArticle").then(res => {
        console.log(res)
        expect(res.response.statusCode).to.equal(200);
      });
      const { exampleArticle0 } = articles;
      cy.addArticleFromFile(exampleArticle0);
      cy.contains("Create Article").click();
      // podmień na selector buttona,
      cy.intercept("POST", "/").as("postMain")
      cy.visit("/");
      cy.checkMainElements();
      cy.contains(exampleArticle0.title).click();
      cy.wait("@postMain");
      cy.get("@postMain").then(res => {
        console.log(res)
        expect(res.response.statusCode).to.equal(200);
      });
      // this test suite logs in, adds a new article from a JSON file in the admin section and verifies the created article on the homepage.
  });
});

describe("Checking buttons", () => {
  it("correct operation of buttons", () => {
    cy.get(".card").eq(0).click();
    cy.get(".navbar-brand").click();
    cy.get(".card").eq(1).click();
    cy.get(".navbar-brand").click();
    cy.viewport("iphone-8");
    cy.get(".navbar-toggler").click();
    cy.viewport(1280, 720);
    cy.get(".nav-link").eq(0).click();
    cy.get(".navbar-brand").click();
    cy.get(".nav-link").eq(1).click();
    cy.get(".navbar-brand").click();
    cy.get(".card").eq(0).click();
    cy.get(".nav-link").eq(0).click();
    cy.get(".card").eq(0).click();
    cy.get(".nav-link").eq(1).click();
    cy.get(".navbar-brand").click();
    cy.get(".card").eq(1).click();
    cy.get(".nav-link").eq(0).click();
    cy.get(".card").eq(1).click();
    cy.get(".nav-link").eq(1).click();
    //this checks how the application buttons work
  });
});