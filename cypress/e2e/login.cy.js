import loginPage_PO from "../support/pageObjects/loginPage_PO";

describe("Test 1: Login Flow", () => {
  const LoginPage_PO = new loginPage_PO();

  it("should login successfully with valid credentials", () => {
    cy.log(Cypress.env("username"), Cypress.env("password"));
    LoginPage_PO.visitUrl();
    LoginPage_PO.loginDetails(Cypress.env("username"), Cypress.env("password"));
    LoginPage_PO.submit();
    //### Verify redirection to home ###//
    cy.contains("Home").should("be.visible");
  });

  it("should show an error message on invalid login", () => {
    cy.log(Cypress.env("testuser@gamil.com"), Cypress.env("Test123"));
    LoginPage_PO.visitUrl();
    LoginPage_PO.loginDetails("testuser@gamil.com", "Test123");
    LoginPage_PO.submit();
    //### Verify error message is visible ###//
    LoginPage_PO.getErrorMessage().should("be.visible");
  });
});
