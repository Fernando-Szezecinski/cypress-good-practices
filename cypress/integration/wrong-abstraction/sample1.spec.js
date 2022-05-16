/// <reference types="cypress" />

//The test below is considered a bad practice as it is not clear what is being validated on method cy.assertResults()
// describe('Wrong abstraction bad practice', () => {
//     beforeEach(() => {
//         cy.intercept(
//             'GET',
//             '**/search**'
//         ).as('getStories')

//         cy.visit('https://hackernews-seven.vercel.app')
//         cy.wait('@getStories')
//     })

//     it('uses custom command for assertion just for the same of reusability', () => {
//         cy.search('cypress')
//         cy.wait('@getStories')

//         cy.assertResults()
//     })

//     it('uses custom command for assertion just for the same of reusability', () => {
//         cy.search('selenium')
//         cy.wait('@getStories')

//         cy.assertResults()
//     })

//     it('uses custom command for assertion just for the same of reusability', () => {
//         cy.search('playwright')
//         cy.wait('@getStories')

//         cy.assertResults()
//     })
// })

//The test below is repeated. However, according to the course author, sometimes it's ok to ignore DRY principle in order to 
//for the sake of a better understanding. Therefore, now we can understand what is being validated. (Explicity validation)
describe('Wrong abstraction bad practice', () => {
    beforeEach(() => {
        cy.intercept(
            'GET',
            '**/search**'
        ).as('getStories')

        cy.visit('https://hackernews-seven.vercel.app')
        cy.wait('@getStories')
    })

    it('uses custom command for assertion just for the same of reusability', () => {
        cy.search('cypress')
        cy.wait('@getStories')

        cy.get('.table-row').then(rows => {
            expect(rows.length).to.be.at.least(1)
        })
    })

    it('uses custom command for assertion just for the same of reusability', () => {
        cy.search('selenium')
        cy.wait('@getStories')

        cy.get('.table-row').then(rows => {
            expect(rows.length).to.be.at.least(1)
        })
    })

    it('uses custom command for assertion just for the same of reusability', () => {
        cy.search('playwright')
        cy.wait('@getStories')

        cy.get('.table-row').then(rows => {
            expect(rows.length).to.be.at.least(1)
        })
    })
})