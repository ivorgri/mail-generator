// test/features/projects.js

import 'babel-polyfill';
import * as RxDB from 'rxdb';
import ProjectSchema from '../../src/database/ProjectSchema';

RxDB.plugin(require('pouchdb-adapter-idb'));

describe('Projects', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
    cy.visitProjects();

    cy.window().then(async (win) => {
      // cy.log('database', [win.db]);
      const collections = [{
        name: 'lala',
        schema: ProjectSchema,
      }];

      const db = await RxDB.create({
        name: 'mailgenerator',
        adapter: 'idb',
        password: 'basicPassword',
      });
      win.db = db;

      // Create projects
      console.log('DatabaseService: Creating projects...');
      await Promise.all(collections.map(colData => db.collection(colData)));

      cy.log('database', [db]);
    });
  });

  it('... should have a projects menu item.', () => {
    // cy.log('database', [cy.window.db]);
    cy.get('[data-qa="projects-menu"]').should('be.visible');
    // cy.log('database', [cy.window.db]);
    cy.window().then((win) => {
      cy.log('database', [win.db]);
    });
  });

  it('... should have an "open project" menu item.', () => {
    cy.openProjectsMenu();
    cy.get('[data-qa="open-projects"]').should('be.visible');
  });

  it('... should have a "create project" menu item.', () => {
    cy.openProjectsMenu();
    cy.get('[data-qa="create-project"]').should('be.visible');
  });

  it('... should create a project when clicking create project menu item and open templates.', () => {
    cy.openProjectsMenu();
    cy.get('[data-qa="create-project"').click();
    cy.url().should('eq', 'http://localhost:8080/#/projects/create');
    const projectName = 'Test project';
    cy.get('[data-qa="project-form"]').should('be.visible');
    cy.get('[id="project-name"]').should('be.visible');
    cy.get('[id="project-name"]').type(projectName);
    cy.get('[data-qa="create-project-button"]').click();
    cy.url().should('eq', 'http://localhost:8080/#/templates');
    cy.get('[data-qa="selected-project-menu-item"]').should('be.visible');
    cy.get('[data-qa="selected-project-menu-item"]').should(($li) => {
      const text = $li.text().trim();
      expect(text).to.equal(projectName);
    });
  });

  it('... should have a "update project" menu item when a project exists.', () => {
    cy.openProjectsMenu();
    cy.createProject();
    cy.openProjectsMenu();
    cy.get('[data-qa="update-project"]').should('be.visible');
  });

  it('... should be able to update a project.', () => {
    cy.openProjectsMenu();
    cy.createProject();
    cy.openProjectsMenu();
    cy.get('[data-qa="update-project"').click();
    cy.url().should('eq', 'http://localhost:8080/#/projects/edit');
    const newProjectName = 'New test project';
    cy.get('[data-qa="project-form"]').should('be.visible');
    cy.get('[id="project-name"]').should('be.visible');
    cy.get('[id="project-name"]').clear();
    cy.get('[id="project-name"]').type(newProjectName);
    cy.get('[data-qa="edit-project-button"]').click();
    cy.url().should('eq', 'http://localhost:8080/#/templates');
    cy.get('[data-qa="selected-project-menu-item"]').should('be.visible');
    cy.get('[data-qa="selected-project-menu-item"]').should(($li) => {
      const text = $li.text().trim();
      expect(text).to.equal(newProjectName);
    });
  });
});