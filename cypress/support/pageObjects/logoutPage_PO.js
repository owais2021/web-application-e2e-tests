class logoutPage_PO {
  logout() {
    cy.contains("Logout").click();
    cy.wait(2000);
  }

  verifyRedirectToLogin() {
    return cy.contains("Demo Login Form").wait(5000);
  }

  visitHomePageDirectly() {
    cy.contains("Home").should("not.exist");
    cy.wait(2000);
  }
}

export default logoutPage_PO;
