/// <reference types="cypress" />

/*
//Code duplication manner: Both tests are exact the same, except for the searched term

describe('Code duplication bad practice - Sample 3', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**\/search**'
        ).as('getStories')
        
        cy.visit('https://hackernews-seven.vercel.app')
        cy.wait('@getStories')
    })

    it('searches 3 times for cypress.io',() => {

        cy.search('cypress.io')
        cy.get('.table-row').then(rows => {
            expect(rows.length.to.be.at.least(1))
        })

        cy.search('cypress.io')
        cy.get('.table-row').then(rows => {
            expect(rows.length.to.be.at.least(1))
        })

        cy.search('cypress.io')
        cy.get('.table-row').then(rows => {
            expect(rows.length.to.be.at.least(1))
        })
                
    })
})

*/


//Non-code duplication manner:
describe('Code duplication bad practice - Sample 3', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/search**'
        ).as('getStories')
        
        cy.visit('https://hackernews-seven.vercel.app')
        cy.wait('@getStories')
    })

    it('searches 3 times for cypress.io',() => {
        Cypress._.times(3, () => {
            cy.search('cypress.io')
            cy.get('.table-row').then(rows => {
                expect(rows.length).to.be.at.least(1)
            })
        })                
    })
})
