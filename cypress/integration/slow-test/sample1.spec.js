///<reference types="cypress" />

//The test below runs faster as it depends on a real http request to complete(line 8)
// describe('Slow tests bad practice - Sample 1', () => {
//     beforeEach(() => {
//         cy.intercept(
//             'GET',
//             '**/search**'
//         ).as('getStories')

//         cy.visit('https://hackernews-seven.vercel.app')
//         cy.wait('@getStories')

//         cy.get('input[type="text"]')
//             .should('be.visible')
//             .and('have.value', 'redux')
//             .as('searchField')
//             .clear()
//     })

//     it('Searches by typing and hitting enter', () => {
//         cy.get('@searchField')
//             .type('frontend testing{enter}')

//         cy.wait('@getStories')

//         cy.get('.table-row')
//             .should('have.length', 100)
//     })

// })

//The test below runs faster as it depends on a mock http request to complete(line 39)
describe('Slow tests bad practice - Sample 1', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/search**',
            { fixture: 'stories' }
        ).as('getStories')

        cy.visit('https://hackernews-seven.vercel.app')
        cy.wait('@getStories')

        cy.get('input[type="text"]')
            .should('be.visible')
            .and('have.value', 'redux')
            .as('searchField')
            .clear()
    })

    it('Searches by typing and hitting enter', () => {

        const { hits } = require('../../fixtures/stories')

        cy.get('@searchField')
            .type('frontend testing{enter}')

        cy.wait('@getStories')

        cy.get('.table-row')
            .should('have.length', hits.length)
    })

})