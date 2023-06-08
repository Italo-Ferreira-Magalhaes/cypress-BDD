// 3 - Criar as ações da page
/// <reference types="cypress" />

export default {

    clickLoginBtn() {
        cy.get('#btnLogin')
            .click()
    },

    checkMessageError(messageError) {
        cy.get('.invalid_input')
            .should('have.text', messageError)
    },

    fillEmail(email) {
        cy.get('#user')
            .should('be.visible')
            .type(email)
    },

    fillPassword(password) {
        cy.get('#password')
            .should('be.visible')
            .type(password)
    },

    loginSucessMessage(message) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', message)
    },

    wellcomeMessage(email) {
        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá, ${email}`)
    }

}