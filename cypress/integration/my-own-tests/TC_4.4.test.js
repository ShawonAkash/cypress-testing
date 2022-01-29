/// <reference types="cypress"/>

describe('TC_4.4', () => {
  it('Help', () => {
    cy.visit('https://www.flickr.com/')
    cy.contains('Log In').click()
    cy.contains('Clear all').click()
    cy.get('[data-testid="identity-email-input"]').type('eibucieez@gmail.com')
    cy.contains('Next').click()
    cy.wait(500)
    cy.get('[data-testid="identity-password-input"]').type('Sh@ntoft1234')
    cy.contains('Sign in').click()
    cy.wait(15000)
    cy.get('a > .avatar').click()
    cy.get('.menu-section > ul > :nth-child(3) > a').click()
  })
})
