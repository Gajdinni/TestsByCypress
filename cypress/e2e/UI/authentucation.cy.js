describe("Basic Authentication", () => {
  it("Authentication", () => {
    cy.visit("/login", {
      auth: {
        username: "tomo",
        password: "tomo",
      },
    });
  });
});

describe("Login and Password", () => {
  beforeEach(() => {
    cy.intercept("GET", "/login").as("getRequest");
  });
  it("Correct Login and Password", () => {
    cy.fixture("users.json").then((example) => {
      const { username, password } = example.exampleCredentials;
      cy.visit("/login");
      cy.wait("@getRequest");
      cy.get("@getRequest").then((res) => {
        console.log(res);
        expect(res.response.statusCode).to.equal(200);
        cy.get('button:contains("Log in")').should("exist");
      });
      cy.loginSelector(username, password);
      cy.visit("/");
    });
    // example, incorrect login and password
    // capture the GET input on the path

    cy.fixture("users.json").then((example1) => {
      const { username1, password1 } = example1.example1;
      cy.visit("/login");
      cy.inputUsername(username1);
      cy.inputPassword(password1);
      cy.clickLoginButton();
      cy.visit("/");
    });

    cy.fixture("users.json").then((example2) => {
      const { username2, password2 } = example2.example2;
      cy.loginSelector(username2, password2);
      cy.visit("/");
    });
    // example, incorrect login and password

    cy.fixture("users.json").then((exampleC) => {
      const { username3, password3 } = exampleC.exampleCorrect;
      cy.loginSelector(username3, password3);
    });
    // correct login and password

    cy.fixture("users.json").then((Admin) => {
      const { adminName, adminPassword } = Admin.Admin;
      cy.visit("/login");
      cy.inputUsername(adminName);
      cy.inputPassword(adminPassword);
      cy.clickLoginButton();
      cy.visit("/");
    });
    // admin login and password
  });
});

describe("Empty login and password", () => {
  it("EmptyTest", () => {
    cy.emptyLogin();

    cy.fixture("users.json").then((exampleC) => {
      const { username3, password3 } = exampleC.exampleCorrect;
      cy.emptyPassword(username3);
      cy.emptyUsername(password3);
    });
    // empty login and password, only empty password, only empty login
  });
});
