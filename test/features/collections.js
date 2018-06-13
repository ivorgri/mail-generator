// test/features/collections.js

describe('Collections', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
    cy.visitCollections();
  });

  it('... should have a collections menu item.', () => {
    cy.get('[data-qa="collections-menu"]').should('be.visible');
  });

  it('... should have an "open collection" menu item.', () => {
    cy.openCollectionsMenu();
    cy.get('[data-qa="open-collections"]').should('be.visible');
  });


  it('... should have a "create collection" menu item.', () => {
    cy.openCollectionsMenu();
    cy.get('[data-qa="create-collection"]').should('be.visible');
  });

  it('... should create a collection when clicking create collection menu item and open templates.', () => {
    cy.openCollectionsMenu();
    cy.get('[data-qa="create-collection"').click();
    cy.url().should('eq', 'http://localhost:8080/#/collections/create');
    const collectionName = 'Test collection';
    cy.get('[data-qa="collection-form"]').should('be.visible');
    cy.get('[id="collection-name"]').should('be.visible');
    cy.get('[id="collection-name"]').type(collectionName);
    cy.get('[data-qa="create-collection-button"]').click();
    cy.url().should('eq', 'http://localhost:8080/#/templates');
    cy.get('[data-qa="selected-collection-menu-item"]').should('be.visible');
    cy.get('[data-qa="selected-collection-menu-item"]').should(($li) => {
      const text = $li.text().trim();
      expect(text).to.equal(collectionName);
    });
  });

  it('... should have a "update collection" menu item when a collection exists.', () => {
    cy.openCollectionsMenu();
    cy.createCollection();
    cy.openCollectionsMenu();
    cy.get('[data-qa="update-collection"]').should('be.visible');
  });

  it('... should be able to update a collection.', () => {
    cy.openCollectionsMenu();
    cy.createCollection();
    cy.openCollectionsMenu();
    cy.get('[data-qa="update-collection"').click();
    cy.url().should('eq', 'http://localhost:8080/#/collections/edit');
    const newCollectionName = 'New test collection';
    cy.get('[data-qa="collection-form"]').should('be.visible');
    cy.get('[id="collection-name"]').should('be.visible');
    cy.get('[id="collection-name"]').clear();
    cy.get('[id="collection-name"]').type(newCollectionName);
    cy.get('[data-qa="edit-collection-button"]').click();
    cy.url().should('eq', 'http://localhost:8080/#/templates');
    cy.get('[data-qa="selected-collection-menu-item"]').should('be.visible');
    cy.get('[data-qa="selected-collection-menu-item"]').should(($li) => {
      const text = $li.text().trim();
      expect(text).to.equal(newCollectionName);
    });
  });
});