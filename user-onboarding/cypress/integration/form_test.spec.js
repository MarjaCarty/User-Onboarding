describe("User Onboarding App", () => {
  //reloads page with every test run
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const nameInput = () => cy.get("input[name=username]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const tosInput = () => cy.get("input[name=termsOfService]");
  const submitButton = () => cy.get("#submit");

  it("the proper elements exist", () => {
    nameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    tosInput().should("exist");
    submitButton().should("exist");
  });

  it("can type inside inputs", () => {
    nameInput()
      .should("have.value", "")
      .type("Username")
      .should("have.value", "Username");

    emailInput()
      .should("have.value", "")
      .type("Email@email.com")
      .should("have.value", "Email@email.com");

    passwordInput()
      .should("have.value", "")
      .type("blah blah")
      .should("have.value", "blah blah");
  });

  it("can check checkbox", () => {
    tosInput().should("not.be.checked");
    tosInput().check();
    tosInput().should("be.checked");
    tosInput().uncheck();
    tosInput().should("not.be.checked");
  });

  it("can submit form data", () => {
    submitButton().should("be.disabled");
    nameInput().type("new user");
    emailInput().type("newEmail@abc.com");
    passwordInput().type("blah blah");
    tosInput().check();
    submitButton().should("not.be.disabled");
    submitButton().click();
  });

  it("form validation if input left empty", () => {
    nameInput().type("blah blah");
    nameInput().clear();
    cy.get("#usernameError").should("exist");

    emailInput().type("blah blah");
    emailInput().clear();
    cy.get("#emailError").should("exist");

    passwordInput().type("blah blah");
    passwordInput().clear();
    cy.get("#passwordError").should("exist");

    tosInput().check();
    tosInput().uncheck();
    cy.get("#tosError").should("exist");
  });
});
