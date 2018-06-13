Cypress.Commands.add('visitCollections', () => {
  cy.visit('/collections');
});

Cypress.Commands.add('openCollectionsMenu', () => {
  cy.get('[data-qa="collections-menu"').click();
});

Cypress.Commands.add('createCollection', () => {
  cy.get('[data-qa="create-collection"').click();
  const collectionName = 'Test collection';
  cy.get('[id="collection-name"]').type(collectionName);
  cy.get('[data-qa="create-collection-button"]').click();
});

Cypress.Commands.add('openTemplatesMenu', () => {
  cy.get('[data-qa="templates-menu"').click();
});

Cypress.Commands.add('createTemplate', () => {
  cy.get('[data-qa="create-template"').click();
  const templateName = 'Test template';
  cy.get('[id="template-name"]').type(templateName);
  cy.get('[data-qa="create-template-button"]').click();
});

Cypress.Commands.add('openElementsMenu', () => {
  cy.get('[data-qa="elements-menu"').click();
});

Cypress.Commands.add('addElements', () => {
  cy.get('[data-qa="add-elements"').click();
  cy.get('[data-qa="element-form"]').find('input[type="checkbox"]').each(($el) => {
    cy.wrap($el).click();
  })
  cy.get('[data-qa="add-elements-button"]').click();
});


