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
});
