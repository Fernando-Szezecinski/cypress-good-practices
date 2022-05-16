/// <reference types="cypress" />
const faker = require('faker')

//The test below contains a hardcoded wait value that makes the test waits for an unnecessary time(Line 27)
// describe('Unnecessary waiting bad practice', () => {
//     const randomDestination = Math.floor(Math.random() * 15) + 1

//     beforeEach(() => {
//         cy.visit(`https://lit-chamber-61567.herokuapp.com/destinations/${randomDestination}/edit`)
//     })

//     it('updates destination info', () => {
//         const info = {
//             name: faker.random.words(5),
//             description: faker.random.words(5)
//         }

// cy.get('#destination_name')
//         .clear()
//         .type(info.name)
//     cy.get('#destination_description')
//         .clear()
//         .type(info.description)
//     cy.get('input[type="submit"]')
//         .click()

//         cy.wait(10000)

//         cy.url()
//             .should(
//                 'be.equal',
//                 `https://lit-chamber-61567.herokuapp.com/destinations/${randomDestination}`
//             )

//         cy.contains('h2', info.name)
//     })
// })

//The test below runs faster as it does not contains a hardcoded wait value.
describe('Unnecessary waiting bad practice', () => {
    const randomDestination = Math.floor(Math.random() * 15) + 1

    beforeEach(() => {
        cy.visit(`https://lit-chamber-61567.herokuapp.com/destinations/${randomDestination}/edit`)
    })

    it('updates destination info', () => {
        const info = {
            name: faker.random.words(5),
            description: faker.random.words(5)
        }

    cy.get('#destination_name')
        .clear()
        .type(info.name)
    cy.get('#destination_description')
        .clear()
        .type(info.description)
    cy.get('input[type="submit"]')
        .click()

        cy.url()
            .should(
                'be.equal',
                `https://lit-chamber-61567.herokuapp.com/destinations/${randomDestination}`
            )

        cy.contains('h2', info.name)
    })
})