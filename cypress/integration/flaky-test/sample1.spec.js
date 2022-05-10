/// <reference types="cypress" />

import faker from 'faker'
/*
Flaky test is happening as the test relies on an application alert instead of an application HTTP request to be finished:

describe('Flaky test bad practice - Sample 1', () => {

    beforeEach(() => {
        cy.visit('https://wlsf82-hacker-stories.web.app')

        cy.contains('p', 'Loading ...')
            .should('be.visible')

        cy.contains('p', 'Loading ...')
            .should('not.exist')
    })

    Cypress._.times(10, () => {
        it('shows a max of 5 buttons for the last search terms', () => {
    
            Cypress._.times(6, () => {
                cy.search(faker.random.word())
                cy.search('test')
            })
    
            cy.contains('p', 'Loading ...')
                .should('be.visible')
    
            cy.contains('p', 'Loading ...')
                .should('not.exist')
    
            cy.get('.last-searches button')
                .should('have.length', 5)
        })
    })
})
*/

//The following tests are more reliable as they wait for the HTTP request to be finished (getStories)
describe('Flaky test bad practice - Sample 1', () => {

    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/search**'
        ).as('getStories')

        cy.visit('https://wlsf82-hacker-stories.web.app')
    })

    Cypress._.times(10, () => {
        it('shows a max of 5 buttons for the last search terms', () => {
    
            Cypress._.times(6, () => {
                cy.search(faker.random.word())
            })
    
            cy.get('.last-searches button')
                .should('have.length', 5)
        })
    })
})