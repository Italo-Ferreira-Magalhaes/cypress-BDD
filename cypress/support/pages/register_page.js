/// <reference types="cypress" />

export default {

    clickBtnRegister() {
        cy.get('#btnRegister')
            .click()
    },

    checkMessageError(message) {
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', message)
    },

    fillName(name) {
        cy.get('#user')
            .should('be.visible')
            .type(name)
    },

    fillEmail(email) {
        cy.get('#email')
            .should('be.visible')
            .type(email)
    },

    fillPassword(password) {
        cy.get('#password')
            .should('be.visible')
            .type(password)
    },

    sucessRegisterMessage(message) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', message)
    },

    wellcomeMessage (name) {
        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${name}`)
    }
}