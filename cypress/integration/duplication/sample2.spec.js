/// <reference types="cypress" />

/*
//Code duplication manner: Both tests are exact the same, except for the searched term

describe('Code duplication bad practice - Sample 2', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**\/search**'
        ).as('getStories')
        
        cy.visit('https://hackernews-seven.vercel.app')
        cy.wait('@getStories')
    })

    it('searches for reactjs',() => {
        cy.get('@searchField')
            .type('reactjs{enter}')

        cy.wait('@getStories')
        cy.get('.table-row', 100)
    })

    it('searches for vuejs',() => {
        cy.get('@searchField')
            .type('vuejs{enter}')

        cy.wait('@getStories')
        cy.get('.table-row', 100)
    })
})

*/


//Non-code duplication manner:

describe('Code duplication bad practice - Sample 2', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/search**'
        ).as('getStories')
        
        cy.visit('https://hackernews-seven.vercel.app')
        cy.wait('@getStories')
    })

    const terms = ['reactjs', 'vuejs']

    terms.forEach(term => {
        it(`searches for ${term}`,() => {
            cy.search(term)
            cy.wait('@getStories')
            cy.get('.table-row')
                .should('have.length', 100)
        })
    })
})
