/// <reference types="cypress"/>

describe('TC_8.2', () => {
  it('Photo Like', () => {
    cy.visit('https://www.flickr.com/')
    cy.contains('Log In').click()
    cy.contains('Clear all').click()
    cy.get('[data-testid="identity-email-input"]').type('eibucieez@gmail.com')
    cy.contains('Next').click()
    cy.wait(500)
    cy.get('[data-testid="identity-password-input"]').type('Sh@ntoft1234')
    cy.contains('Sign in').click()

    cy.get('.icon-search > use').click({ force: true })
    cy.get('#search-field').click({ force: true }).type('Tiger')
    cy.get('.search-icon-button').click({ force: true })
    cy.wait(20000)
    cy.get('.photo-list-photo-interaction').first().click({ force: true })
    //
  })
})