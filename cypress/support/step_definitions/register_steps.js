/// <reference types="cypress" />

import { Given, When, Then } from "@bahmutov/cypress-esbuild-preprocessor"
import home_page from "../pages/home_page"
import register_page from "../pages/register_page"

const name = 'Ítalo Ferreira'
const invalidEmail = 'italoferreira'
const validEmail = 'italoferreira@gmail.com'
const invalidPassword = '123'
const validPassword = '123456'


Given ("estou na tela de cadastro", () => {
    home_page.accessRegister()
})

Given ("preencho o nome", () => {
    register_page.fillName(name)
})

Given ("preencho o email invalido", () => {
    register_page.fillEmail(invalidEmail)
})

Given ("preencho o email valido", () => {
    register_page.fillEmail(validEmail)
})

Given ("preencho a senha invalida", () => {
    register_page.fillPassword(invalidPassword)
})

Given ("preencho os dados validos", () => {
    register_page.fillName(name)
    register_page.fillEmail(validEmail)
    register_page.fillPassword(validPassword)
})

When ("clico em Cadastrar", () => {
    register_page.clickBtnRegister()
})

Then ("recebo a mensagem {string} no cadastro", (message) => {
    register_page.checkMessageError
})

Then ("cadastro realizado com sucesso", () => {
    register_page.sucessRegisterMessage('Cadastro realizado!')
    register_page.wellcomeMessage({name})
})