/// <reference types="cypress" />
import alertEle from "../pages/alert";
import TaskPage from "../pages/taskPage";
import "cypress-real-events/support";
import "cypress-iframe";

describe("Task page", () => {
  before(() => {
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
    cy.get("iframe");
    // TaskPage.getIframeBody().find('#app div.homepage-header-container  div.cta > a').should('have.text', 'Try it').click()
    // TaskPage.getIframeBody().find('#auth-page-container h1').should('have.text', 'Start creating courses now')
  });

  it("Open new tab windows", function () {
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.wait(30000);
    cy.go("back");
  });
});
