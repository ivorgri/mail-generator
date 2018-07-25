Cypress.Commands.add('visitProjects', () => {
  cy.visit('/projects');
});

Cypress.Commands.add('openProjectsMenu', () => {
  cy.get('[data-qa="projects-menu"').click();
});

Cypress.Commands.add('createProject', () => {
  cy.log('database', [window.db]);
  /* cy.get('[data-qa="create-project"').click();
  const projectName = 'Test project';
  cy.get('[id="project-name"]').type(projectName);
  cy.get('[data-qa="create-project-button"]').click(); */
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


