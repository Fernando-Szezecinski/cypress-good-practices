/// <reference types="cypress" />

/*
//The tests below are error-prone as they use hardcoded values(lines 23, 26, 30) to validate content length
describe('Hardcoded assertion bad practice - Sample 1', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**\/search**',
            {fixture: 'stories'}
        ).as('getStories')

        cy.visit('https://hackernews-seven.vercel.app')
        cy.wait('@getStories')
    })

    it('searches', () => {
        cy.search('cypress.io')
        cy.wait('@getStories')

        cy.get('.table-row')
            .as('tableRows')
            .should('have.length', 2)
        
        cy.get('@tableRows')
            .eq(0)
            .should('contain', 'Agile Testing')
        
        cy.get('@tableRows')
            .eq(1)
            .should('contain', 'Clean Code')
    })
})
*/

//Tests below will never fail due to content length as it doesn't contain hardcoded values
describe('Hardcoded assertion bad practice - Sample 2 (using JS destructuring)', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/search**',
            {fixture: 'stories'}
        ).as('getStories')

        cy.visit('https://hackernews-seven.vercel.app')
        cy.wait('@getStories')
    })

    it('searches', () => {

        const { hits } = require('../../fixtures/stories')

        cy.search('cypress.io')
        cy.wait('@getStories')

        cy.get('.table-row')
                .as('tableRows')
                .should('have.length', hits.length)

        hits.forEach((hit, index) => {
            cy.get('@tableRows')
                .eq(index)
                .should('contain', hit.title)
        })
    })
})