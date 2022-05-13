/// <reference types="cypress" />
/*

// Test exposes sensitive data, therefore it's a bad practice
describe('Sensitive data bad practice', () => {
    beforeEach(() => {
        cy.visit('https://notes-serverless-app.com/login')
    })


    it('Fills the form with sensitive data', () => {
        cy.get('#email').type('joe@example.com')
        cy.get('#password').type('s3Cr€7-p@s5w0rd')
    })
})
*/

// The test below doesnt expose any sensitive data
describe('Sensitive data bad practice', () => {
    beforeEach(() => {
        cy.visit('https://notes-serverless-app.com/login')
    })


    it('Fills the form with sensitive data', () => {
        cy.get('#email').type(Cypress.env('user_email'))
        cy.get('#password').type(Cypress.env('user_password'), {log:false})
    })
})