/// <reference types="cypress" />

export default {
    accessLogin() {
        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-user')
            .click()
            .get('.account_form')
            .should('be.visible')
    },

    accessRegister() {
        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-lock')
            .click()
            .get('.account_form')
            .should('be.visible')
    }
}