/// <reference types="cypress" />

describe('Browser testing bad practice - Sample 1', () => {
    beforeEach(() => {
      cy.visit('https://notes-serverless-app.com')
    })
  
    it('1-Checks if system directs user to login page when clicking on the login link', () => {
      
        // Browser testing manner(line 11):
        // cy.contains('.nav a', 'Login').click()
        // cy.url().should('be.equal', 'https://notes-serverless-app.com/login')

        //Non-browser testing manner:
        cy.contains('.nav a', 'Login')
            .should('have.attr', 'href', '/login')
            .and('not.have.attr', 'target')
    })
  })