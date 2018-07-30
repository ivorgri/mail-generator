import * as Database from '@/database/database';

Cypress.Commands.add('vuex', () => {
  cy.window().its('app.$store');
});

Cypress.Commands.add('createDatabase', () => {
  // cy.window().its('app.$store').its('getters').its('db');
  function createDatabase(){
    return new Cypress.promise((resolve, reject) => {
      resolve(Database.default());
  }
  cy.vuex().then(store => {
    const db = new Cypress.promise(Database.default();
    } catch (error) {
      console.log(error);
    }
    store.commit('setDB',db);
    const project = {
      name: 'Test',
      description: 'Test',
      id = `${new Date().toJSON()}test`,
      createTime = new Date().toJSON(),
    };
    try {
      await this.db.projects.upsert(project);
    } catch (error) {
      console.log(error);
    }
  });
});

Cypress.Commands.add('clearDatabase', () => {
  cy.db().then(($db) => {
    cy.log($db);
    // $db.projects.remove();
  });
});

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


