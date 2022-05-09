/// <reference types="cypress" />

/*
//With code duplication(lines 12,13 and 14):
describe('code duplication bad practice - Sample 4', () => {
    beforeEach(() => {
        cy.visit('https://bit.ly/2XSuwCW')
    })


    it('checks all checkboxes from a specific fieldset', () => {
        cy.get('#friend').check()
        cy.get('#publication').check()
        cy.get('#social-media').check()
    })
})
*/

//Without code duplication:
describe('code duplication bad practice - Sample 4', () => {
    beforeEach(() => {
        cy.visit('https://bit.ly/2XSuwCW')
    })


    it('checks all checkboxes from a specific fieldset', () => {
        cy.get('fieldset div input[type="checkbox"]').check()
    })
})