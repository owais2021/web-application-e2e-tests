class loginPage_PO {
  visitUrl() {
    // cy.clearLocalStorage();
    // cy.clearCookies();
    cy.visit(Cypress.config("baseUrl"));
  }

  loginDetails(username, password) {
    cy.get("#email-input").type(username);
    cy.get("#password-input").type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
    cy.wait(5000);
  }

  getErrorMessage() {
    return cy.contains("Invalid email or password. Try again.").wait(5000);
  }
}

export default loginPage_PO;
