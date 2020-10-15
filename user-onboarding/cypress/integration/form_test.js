describe("User Onboarding Form", () => {
  ///reloads page before every test
  beforeEach(() => {
    cy.visit("http://localhost:61630");
  });

  ///helpers///
  const nameInput = () => cy.get("input[name=username]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const tosCheckbox = () => cy.get("input[name=termsOfService]");
  const submitBtn = () => cy.get("#submit");
});
