/// <reference types="cypress"/>

describe('TC_8.4', () => {
  it('Photo share', () => {
    cy.visit('https://www.flickr.com/')
    cy.contains('Log In').click()
    cy.contains('Clear all').click()
    cy.get('[data-testid="identity-email-input"]').type('eibucieez@gmail.com')
    cy.contains('Next').click()
    cy.wait(500)
    cy.get('[data-testid="identity-password-input"]').type('Sh@ntoft1234')
    cy.contains('Sign in').click()

    cy.get('.icon-search > use').click({ force: true })
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/ul[2]/li[1]/div[1]/form[1]/input[1]').click({ force: true }).type('Tiger')
    cy.wait(500)
    cy.get('.search-icon-button').click({ force: true })
    cy.wait(15000)
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/main[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]').last().click({ force: true })
    cy.get('[title="Share Photo"]').click({ multiple: true, force: true })
    //
  })
})

