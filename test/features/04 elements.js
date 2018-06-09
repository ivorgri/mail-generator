import { openElementsMenu, addElements } from "../support";

// test/features/elements.js

describe('Elements', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });

  it('... should have a elements menu item.', () => {
    cy.get('[data-qa="elements-menu"]').should('be.visible');
  });

  it('... should have a "add element" menu item.', () => {
    openElementsMenu();
    cy.get('[data-qa="add-elements"]').should('be.visible');
  });

  it('... should be able to add elements when clicking add element menu item.', () => {
    addElements();
    cy.url().should('eq', 'http://localhost:8080/#/elements/add');
    cy.get('[data-qa="element-form"]').should('be.visible');
    cy.get('[data-qa="element-form"]').find('input[type="checkbox"]').should('have.length', 12);
    cy.get('[data-qa="element-form"]').find('input[type="checkbox"]').each(($el) => {
      cy.wrap($el).click();
    })
    cy.get('[data-qa="add-elements-button"]').should('be.visible').and('not.to.be.disabled');
    cy.get('[data-qa="add-elements-button"]').click();
    cy.url().should('eq', 'http://localhost:8080/#/templates');
    cy.get('[data-qa="email-header"]').should('have.length', 1);
    cy.get('[data-qa="email-element"]').should('have.length', 9);
    cy.get('[data-qa="email-footer"]').should('have.length', 1);
    cy.get('[data-qa="email-bleed-background"]').should('have.length', 1);
  });

  it('... when you hover over an element, an update button should be present', () => {
    cy.get('[data-qa="email-element"]').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[data-qa="edit-element"]').should('be.visible');
    });
  });

  it('... when you hover over an element, a remove button should be present', () => {
    cy.get('[data-qa="email-element"]').each(($el) => {
      cy.wrap($el).trigger('mouseover');
      cy.get('[data-qa="remove-element"]').should('be.visible');
    });
  });

  /*

  it('... should be able to update a collection.', () => {
    updateTemplate();
    cy.url().should('eq', 'http://localhost:8080/#/templates/edit');
    const newCollectionName = 'New test collection';
    cy.get('[data-qa="template-form"]').should('be.visible');
    cy.get('[id="template-name"]').should('be.visible');
    cy.get('[id="template-name"]').clear();
    cy.get('[id="template-name"]').type(newCollectionName);
    cy.get('[data-qa="edit-template-button"]').click();
    cy.url().should('eq', 'http://localhost:8080/#/elements');
    cy.get('[data-qa="template-items"]').should('be.visible');
    cy.get('[data-qa="template-items"]').should(($li) => {
      const text = $li.text().trim();

      expect(text).to.equal(newCollectionName);
    });
  }); */
});