/// <reference types="cypress"/>

describe('TC_001', () => {
  it('We have correct page', () => {
    cy.visit('https://www.flickr.com/')
  })
  it('TC_003', () => {
    cy.contains('Sign Up').click()
    cy.contains('Sign up for Flickr').should('exist')
    cy.contains('By signing up, you agree with Flickr\'s').should('exist')
    cy.get('[id="sign-up-first-name"]').type('arian')
    cy.get('[id="sign-up-last-name"]').type('shawon')
    cy.get('[id=sign-up-age]').type('22')
    cy.get('[data-testid=identity-email-input]').type('arianshawon06@gmail.com')
    cy.get('[data-testid=identity-password-input]').type('akash78787898')
    cy.get('.recaptcha-checkbox').check({ force: true })
    cy.contains('Sign up').click()
  })
})