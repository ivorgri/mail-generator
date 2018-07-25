// test/features/app.js

describe('App', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
    cy.visitProjects();
  });

  it('... should be loaded.', () => {
    // By using `data-qa` selectors, we can separate
    // CSS selectors used for styling from those used
    // exclusively for testing our application.
    // See: https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements
    cy.get('[data-qa="app"]').should('be.visible');
  });

  it('... should show database loading on initial setup.', () => {
    cy.get('[data-qa="init-database"]').should('be.visible');
  });

  it('... should have an active vuex store', () => {
    cy.vuex().should('exist');
  });

  it('... should have an active database', () => {
    cy.vuex().its('getters').its('db').should('exist');
  });

  it('... should show main menu when database is loaded', () => {
    cy.db().get('[data-qa="main-menu"').should('be.visible');
  });
});