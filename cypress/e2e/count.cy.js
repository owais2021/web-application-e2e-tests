import loginPage_PO from "../support/pageObjects/loginPage_PO";
import counter_PO from "../support/pageObjects/counter_PO";

describe("Counter Functionality Tests", () => {
  const LoginPage_PO = new loginPage_PO();
  const Counter_PO = new counter_PO();

  beforeEach(() => {
    cy.log(Cypress.env("username"), Cypress.env("password"));
    LoginPage_PO.visitUrl();
    LoginPage_PO.loginDetails(Cypress.env("username"), Cypress.env("password"));
    LoginPage_PO.submit();
  });

  it("should increments the counter by 1 on each click", () => {
    Counter_PO.getCounterValue().should("have.text", "0");
    Counter_PO.increment();
    Counter_PO.getCounterValue().should("have.text", "1");
    Counter_PO.increment();
    Counter_PO.getCounterValue().should("have.text", "2");
  });

  it("should decrement the counter value by 1 with each click", () => {
    Counter_PO.getCounterValue().should("have.text", "0");
    Counter_PO.decrement();
    Counter_PO.getCounterValue().should("have.text", "-1");
    Counter_PO.decrement();
    Counter_PO.getCounterValue().should("have.text", "-2");
  });

  it("should reset the counter value to 0", () => {
    Counter_PO.increment();
    Counter_PO.increment();
    Counter_PO.getCounterValue().should("have.text", "2");
    Counter_PO.reset();
    Counter_PO.getCounterValue().should("have.text", "0");
  });
});
