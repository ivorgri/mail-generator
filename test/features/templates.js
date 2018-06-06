import { openTemplatesMenu, createTemplate, updateTemplate } from "../support";

// test/features/templates.js

describe('Templates', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });

  it('... should have a templates menu item.', () => {
    cy.get('[data-qa="templates-menu"]').should('be.visible');
  });

  it('... should have an "open template" menu item.', () => {
    openTemplatesMenu();
    cy.get('[data-qa="open-templates"]').should('be.visible');
  });

  it('... should have a "create template" menu item.', () => {
    cy.get('[data-qa="create-template"]').should('be.visible');
  });

  it('... should create a template when clicking create template menu item.', () => {
    createTemplate();
    cy.url().should('eq', 'http://localhost:8080/#/templates/create');
    const templateName = 'Test template';
    cy.get('[data-qa="template-form"]').should('be.visible');
    cy.get('[id="template-name"]').should('be.visible');
    cy.get('[id="template-name"]').type(templateName);
    cy.get('[data-qa="create-template-button"]').click();
    cy.url().should('eq', 'http://localhost:8080/#/elements');
    cy.get('[data-qa="template-items"]').should('be.visible');
    cy.get('[data-qa="template-items"]').should(($li) => {
      const text = $li.text().trim();

      expect(text).to.equal(templateName);
    });
  });

  it('... should now have a "update template" menu item.', () => {
    openTemplatesMenu();
    cy.get('[data-qa="update-template"]').should('be.visible');
  });

  it('... should be able to update a collection.', () => {
    updateTemplate();
    cy.url().should('eq', 'http://localhost:8080/#/templates/edit');
    const newCollectionName = 'New test collection';
    cy.get('[data-qa="template-form"]').should('be.visible');
    cy.get('[id="template-name"]').should('be.visible');
    cy.get('[id="template-name"]').clear();
    cy.get('[id="template-name"]').type(newCollectionName);
    cy.get('[data-qa="update-template-button"]').click();
    cy.url().should('eq', 'http://localhost:8080/#/elements');
    cy.get('[data-qa="template-items"]').should('be.visible');
    cy.get('[data-qa="template-items"]').should(($li) => {
      const text = $li.text().trim();

      expect(text).to.equal(newCollectionName);
    });
  });
});