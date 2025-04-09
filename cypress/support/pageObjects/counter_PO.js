class counter_PO {
  increment() {
    cy.xpath("/html/body/div/div/div/button[1]").click();
    cy.wait(2000);
  }

  decrement() {
    cy.xpath("/html/body/div/div/div/button[2]").click();
    cy.wait(2000);
  }

  reset() {
    cy.contains("Reset").click();
    cy.wait(2000);
  }

  getCounterValue() {
    return cy.get("p");
  }
}

export default counter_PO;
