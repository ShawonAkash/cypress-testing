/// <reference types="cypress"/>

describe('TC_4.1', () => {
  it('Upload your photo', () => {
    cy.visit('https://www.flickr.com/')
    cy.contains('Log In').click()
    cy.contains('Clear all').click()
    cy.get('[data-testid="identity-email-input"]').type('eibucieez@gmail.com')
    cy.contains('Next').click()
    cy.wait(500)
    cy.get('[data-testid="identity-password-input"]').type('Sh@ntoft1234')
    cy.contains('Sign in').click()
    cy.wait(500)
    cy.get('[title="Upload"]').click()
    cy.url().should('include', '/photos/upload/')
    cy.get('#choose-photos-and-videos').click()
    cy.go('back')
  })
})