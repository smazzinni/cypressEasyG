/// <reference types="cypress" />
import alertEle from "../pages/alert";
import TaskPage from "../pages/taskPage";
import "cypress-real-events/support";
import "cypress-iframe";

describe("Task page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/task.html");
  });

  it("should display the correct page title", () => {
    cy.title().should("equal", "Practice Page");
  });

  it("should select the correct option", () => {
    TaskPage.selectdd();
  });

  it("should upload the file", () => {
    TaskPage.upload_File();
  });

  it("verify alert  window", function () {
    alertEle.alertPop();
  });

  it("verify confirm window", function () {
    alertEle.confirmpop();
  });

  it("Hide Input text box", function () {
    TaskPage.hideInput();
  });

  it("Show Input text box", function () {
    TaskPage.showInput();
  });

  it("Hover element Top and Reload", function () {
    TaskPage.hoverTop();
    TaskPage.hoverReload();
  });

  it("cypress iFrame Handle", function () {
    cy.get("#courses-iframe")
      .should("be.visible")
      .should("not.be.empty")
      .then(($iframe) => {
        const $body = $iframe.contents().find("body");

        cy.wrap($body).find(".hp-cta").should("be.visible");
      });
  });

  it("Open new tab windows", function () {
    cy.get("button#opentab").invoke("removeAttr", "target").click();
    // cy.get('button#opentab').should('have.attr', 'href', 'www.easygenerator.com') // no page load!
    cy.origin("www.easygenerator.com", () => {
      cy.url().should("contain", "www.easygenerator.com");
    });

    cy.go("back");
  });
});
