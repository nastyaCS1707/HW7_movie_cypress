/// <reference types="cypress" />

describe("Login admin page", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.fixture("selectors").as("selectors");
    cy.fixture("testData").as("testData");
  });

  it("Login as admin with valid email", function () {
    const sel = this.selectors;
    const data = this.testData;

    cy.get(sel.adminPage.email).type(data.valid.email);
    cy.get(sel.adminPage.password).type(data.valid.password);
    cy.get(sel.adminPage.submit).click();
    cy.contains("Управление залами").should("be.visible");
  });

  it("Login as admin with invalid email", function () {
    const sel = this.selectors;
    const data = this.testData;

    cy.get(sel.adminPage.email).type(data.invalid.email);
    cy.get(sel.adminPage.password).type(data.invalid.password);
    cy.get(sel.adminPage.submit).click();
    cy.contains("Ошибка авторизации!").should("be.visible");
  });
});
