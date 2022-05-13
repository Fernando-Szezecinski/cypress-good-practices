/// <reference types="cypress" />

/*
//Unnecessary complexity to write a test that just needs to check a checkbox multiple times

describe('Unnecessary complexity anti-patern', () => {
    beforeEach(() => {
        cy.visit('https://bit.ly/2XSuwCW')

        if(Math.random() > 0.5){
            cy.get('#agree')
                .click()
        }
    })

    Cypress._.times(5, () => {
        it('Checks the checkbox only if not checked', () => {

            cy.get('body').then($body => {

                if($body.find('#agree:checked').length){
                    cy.log('Checkbox was checked')
                    return
                }
                cy.log('checkbox was unchecked')    
                $body.find('#agree').click()
                return
            })

            cy.get('#agree')
                .should('be.checked')

        })
    })


})
*/
describe('Unnecessary complexity anti-patern', () => {
    beforeEach(() => {
        cy.visit('https://bit.ly/2XSuwCW')

        if(Math.random() > 0.5){
            cy.get('#agree')
            .click()
        }
    })

    Cypress._.times(5, () => {
        it('Checks the checkbox only if not checked', () => {
            cy.get('#agree')
                .check()
                .should('be.checked')

        })
    })


})