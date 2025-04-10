import loginPage_PO from "../support/pageObjects/loginPage_PO";
import logoutPage_PO from "../support/pageObjects/logoutPage_PO";

  describe("Logout Functionality Test", () => {

    const LoginPage_PO = new loginPage_PO();
    const LogoutPage_PO = new logoutPage_PO();

    beforeEach(() => {
      cy.log(Cypress.env("username"), Cypress.env("password"));
      LoginPage_PO.visitUrl();
      LoginPage_PO.loginDetails(
        Cypress.env("username"),
        Cypress.env("password")
      );
      
      LoginPage_PO.submit();
    });

    it("logs out user and redirects to login page", () => {
      LogoutPage_PO.logout();
      LogoutPage_PO.verifyRedirectToLogin();
    });

    it("prevents access to home page when not logged in", () => {
      LogoutPage_PO.logout();
      LogoutPage_PO.visitHomePageDirectly();
      LogoutPage_PO.verifyRedirectToLogin();
    });
  });