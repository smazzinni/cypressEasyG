/// <reference types="Cypress" />

class alertEle {
  alertPop() {
    return cy
      .readFile(
        "C:/Users/faiza/Downloads/cypress/cypress/fixtures/alert-text.txt"
      )
      .then((text) => {
        // Enter `text` into the textbox
        cy.get("#name").type(text);
        cy.get("#alertbtn").click();

        cy.on("window:alert", (text) => {
          expect(text).to.contains("Hello from Easygenerator");
        });
      });
  }

  confirmpop() {
    return cy
      .readFile(
        "C:/Users/faiza/Downloads/cypress/cypress/fixtures/alert-text.txt"
      )
      .then((text) => {
        // Enter `text` into the textbox
        cy.get("#name").type(text);
        cy.get("#confirmbtn").click();

        cy.on("window:confirm", (text) => {
          expect(text).to.contains("Easygenerator");
        });
      });
  }
}

export default new alertEle();
