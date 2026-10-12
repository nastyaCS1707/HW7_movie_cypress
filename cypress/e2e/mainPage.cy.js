/// <reference types="cypress" />

describe("Main Page", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/client/index.php");
  });

  it("Header name is visible", () => {
    cy.contains("Идём").contains("в").parent().contains("кино");
  });

  it("Weekdays is visible", () => {
    cy.fixture("selectors").then((s) => {
      cy.get(s.mainPage.weekday).should("have.length", 7);
    });
  });

  it("Movies list is visible", () => {
    cy.fixture("selectors").then((s) => {
      cy.get(s.mainPage.movies).should("have.length.greaterThan", 0);
    });
  });
});
