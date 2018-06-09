// utils.js
export const visitCollections = () => cy.visit('/collections');

export const openCollectionsMenu = () => cy.get('[data-qa="collections-menu"').click();

export const createCollection = () => cy.get('[data-qa="create-collection"').click();

export const updateCollection = () => cy.get('[data-qa="update-collection"').click();

export const openTemplatesMenu = () => cy.get('[data-qa="templates-menu"').click();

export const createTemplate = () => cy.get('[data-qa="create-template"').click();

export const updateTemplate = () => cy.get('[data-qa="update-template"').click();

export const openElementsMenu = () => cy.get('[data-qa="elements-menu"').click();

export const addElements = () => cy.get('[data-qa="add-elements"').click();