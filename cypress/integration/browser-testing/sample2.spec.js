/// <reference types="cypress"/>

describe('Browser testing bad practice', () => {

    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/search**',
            { fixture: 'stories' }
        ).as('getStories')

        cy.visit('https://hackernews-seven.vercel.app')
        cy.wait('@getStories')
    })

    it('Ensure that a new tab was opened in the correct URL', () => {

        // Browser testing manner(line 21):
        // cy.get('.table-row a')
        //     .first()
        //     .click()
        //     .should('have.attr', 'href', 'https://example.com/0')
        //         .and('have.attr', 'target', '_blank')

        //Non-browser testing manner:
        cy.get('.table-row a')
            .first()
            .should('have.attr', 'href', 'https://example.com/0')
                .and('have.attr', 'target', '_blank')
    })

})