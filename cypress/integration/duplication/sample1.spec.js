/// <referece types="cypress" />

/*

//Code duplication manner (from line 09 until 20 it's the same code as from line 30 until 41):

describe('Code duplication bad practice - Sample 1', () => {
    it('Searches by typing and hitting enter', () => {
        cy.intercept(
            'GET',
            '**\/search**'
        ).as('getStories')

        cy.visit('https://hackernews-seven.vercel.app')
        cy.wait('@getStories')

        cy.get('input[type="text"]')
            .should('be.visible')
            .and('have.value', 'redux')
            .clear()
            .type('front testing{enter}')

        cy.wait('@getStories')
            
        cy.get('.table-row')
            .should('have.length', 100)
    })

    it('Searches by typing and pressing the search button', () => {
        cy.intercept(
            'GET',
            '**\/search**'
        ).as('getStories')

        cy.visit('https://hackernews-seven.vercel.app')
        cy.wait('@getStories')

        cy.get('input[type="text"]')
            .should('be.visible')
            .and('have.value', 'redux')
            .clear()
            .type('front testing')

        cy.contains('button', 'Search')
            .should('be.visible')
            .click()

        cy.wait('@getStories')
            
        cy.get('.table-row')
            .should('have.length', 100)
    })
})
*/


//Non-Code duplication manner:

describe('Code duplication bad practice - Sample 1', () => {

    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/search**',
            {fixture: 'stories.json'}
        ).as('getStories')

        cy.visit('https://hackernews-seven.vercel.app')
        cy.wait('@getStories')

        cy.get('input[type="text"]')
            .as('searchField')
            .should('be.visible')
            .and('have.value', 'redux')
            .clear()
    })

    it('Searches by typing and hitting enter', () => {
        
        cy.get('@searchField')
            .type('front testing{enter}')

        cy.wait('@getStories')
            
        cy.get('.table-row')
            .should('have.length', 3)
    })

    it('Searches by typing and pressing the search button', () => {
        
        cy.get('@searchField')
            .type('front testing')

        cy.contains('button', 'Search')
            .should('be.visible')
            .click()

        cy.wait('@getStories')
            
        cy.get('.table-row')
            .should('have.length', 3)
    })
})