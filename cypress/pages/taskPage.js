class TaskPage {
  selectdd() {
    return cy.get("select").select("option2").should("have.value", "option2");
  }

  upload_File() {
    return cy.uploadFile("sample.png", "image/png", 'input[type="file"]');
  }

  hideInput() {
    return cy
      .get("#hide-textbox")
      .click()
      .get("#displayed-text")
      .should("not.be.visible");
  }

  showInput() {
    return cy
      .get("#show-textbox")
      .click()
      .get("#displayed-text")
      .should("be.visible");
  }

  hoverTop() {
    return cy
      .contains(".hover-container", "Mouse")
      .click()
      .contains("Top")
      .click();
  }

  hoverReload() {
    return cy
      .contains(".hover-container", "Mouse")
      .click()
      .contains("Reload")
      .click();
  }

}
export default new TaskPage();
