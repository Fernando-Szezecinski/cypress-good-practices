/// <reference types="cypress" />

// The test below runs slower it access the target page by clicking on a button(line 9)
// describe('Slow tests bad practice - Sample 2', () => {
//     it('Does not enable sign up on different passwords', () => {
//         cy.visit('https://notes-serverless-app.com')

//         cy.contains('.btn', 'Signup')
//             .click()

//         cy.get('#email').type('joe@example.com')
//         cy.get('#password').type('foobarbaz')
//         cy.get('#confirmPassword').type('foobarbaz')

//         cy.contains('button', 'Signup')
//             .should('be.visible')
//     })
// })

// The test below runs faster it access the target page directly instead of performing a click to access it(line 22)
describe('Slow tests bad practice - Sample 2', () => {
    it('Does not enable sign up on different passwords', () => {
        cy.visit('https://notes-serverless-app.com/signup')

        cy.get('#email').type('joe@example.com')
        cy.get('#password').type('foobarbaz')
        cy.get('#confirmPassword').type('foobarbaz')

        cy.contains('button', 'Signup')
            .should('be.visible')
    })
})