/// <reference types="cypress" />

describe("Booking seats", () => {
  it("Booking seats by movie title", () => {
    const currentHour = new Date().getHours();
    cy.fixture("selectors").then((s) => {
      cy.visit("http://qamid.tmweb.ru/admin");
      cy.get(s.adminPage.email).type("qamid@qamid.ru");
      cy.get(s.adminPage.password).type("qamid");
      cy.get(s.adminPage.submit).click();

      cy.get(s.adminPage.filmID)
        .first()
        .invoke("text")
        .then((rawText) => {
          const movieName = rawText.trim();
          cy.visit("http://qamid.tmweb.ru/");
          if (currentHour > 12) {
            cy.get(s.mainPage.weekday).eq(1).click();
          }
          cy.contains(s.mainPage.movieTitle, movieName)
            .closest(s.mainPage.movieSection)
            .contains(s.mainPage.seanceTime, "12:00")
            .click();
          cy.get(s.mainPage.freeSeat).first().click();
          cy.get(s.mainPage.acceptButton).click();
          cy.contains("Вы выбрали билеты:").should("be.visible");
        });
    });
  });
});
