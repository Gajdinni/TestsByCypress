import users from '/Cypress/cypress/fixtures/users.json'

describe("Login and Password", () => {
  it("Incorrect Login and Password", () => {
      const { username, password } = users.exampleCredentials;
      cy.intercept("GET", "/login").as("getLogin");
      cy.visit("/login");
      cy.checkLoginElements();
      cy.wait("@getLogin");
      cy.get("@getLogin").then(res => {
        console.log(res);
        expect(res.response.statusCode).to.equal(200);
      cy.intercept("POST", "/login").as("postLogin")
      cy.loginSelector(username, password);
      cy.wait("@postLogin")
      cy.get("@postLogin").then(res => {
        console.log(res)
        expect(res.response.statusCode).to.equal(500);
      });
      cy.visit("/");
      cy.checkMainElements();
    });
    // example, incorrect login and password
    // capture the GET and POST input on the path

      const { username1, password1 } = users.example1;
      cy.visit("/login");
      cy.checkLoginElements();
      cy.intercept("POST", "/login").as("postLogin")
      cy.inputUsername(username1);
      cy.inputPassword(password1);
      cy.clickLoginButton();
      cy.wait("@postLogin")
      cy.get("@postLogin").then(res => {
        console.log(res)
        expect(res.response.statusCode).to.equal(500);
      });
      cy.visit("/");
      cy.checkMainElements

      const { username2, password2 } = users.example2;
      cy.loginSelector(username2, password2);
      cy.wait("@postLogin")
      cy.get("@postLogin").then(res => {
        console.log(res)
        expect(res.response.statusCode).to.equal(500);
      });
      cy.visit("/");
      cy.checkMainElements();
    // example, incorrect login and password
    });

  it("Correct Login and Password", () => {
      cy.visit("/login");
      cy.checkLoginElements();
      cy.intercept("POST", "/login").as("postLogin")
      const { username3, password3 } = users.exampleCorrect;
      cy.loginSelector(username3, password3);
      cy.wait("@postLogin")
      cy.get("@postLogin").then(res => {
        console.log(res)
        expect(res.response.statusCode).to.equal(302);
      });
      cy.intercept("GET", "/").as("getMain");
      cy.visit("/");
      cy.checkMainElements();
      cy.wait("@getMain")
      cy.get("@getMain").then(res => {
        console.log(res)
        expect(res.response.statusCode).to.equal(200);
      });
    // correct login and password
    });
  
  it("Admin Login and Password", () => {
      const { adminName, adminPassword } = users.Admin;
      cy.visit("/login");
      cy.checkLoginElements();
      cy.intercept("POST", "/login").as("postLogin")
      cy.inputUsername(adminName);
      cy.inputPassword(adminPassword);
      cy.clickLoginButton();
      cy.wait("@postLogin")
      cy.get("@postLogin").then(res => {
        console.log(res)
        expect(res.response.statusCode).to.equal(302);
      });
      cy.intercept("GET", "/").as("getMain");
      cy.visit("/");
      cy.checkMainElements();
      cy.wait("@getMain")
      cy.get("@getMain").then(res => {
        console.log(res)
        expect(res.response.statusCode).to.equal(200);
      });
    // admin login and password
  });

  it("EmptyTest", () => {
    cy.emptyLogin();
      const { username3, password3 } = users.exampleCorrect;
      cy.emptyPassword(username3);
      cy.emptyUsername(password3);
    });
    // empty login and password, only empty password, only empty login
});
