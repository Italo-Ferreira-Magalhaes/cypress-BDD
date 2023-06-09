/// 2 - Transformar o ghrkin em método 
/// <reference types="cypress" />

//import { Given, When, Then } from "@bahmutov/cypress-esbuild-preprocessor"
import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"

const email = 'italoferreira@gmail.com'
const password = '123456'

Given ("estou na tela de login", () => {
    home_page.accessLogin()
})

Given ("preencho e-mail", () => {
    login_page.fillEmail(email)
})

Given ("preencho meus dados de acesso", () => {
    login_page.fillEmail(email)
    login_page.fillPassword(password)
})

When ("clico em Login", () => {
    login_page.clickLoginBtn()
})

Then ("recebo a mensagem {string}", (message) => {
    login_page.checkMessageError(message)
})

Then ("login realizado com sucesso", () => {
    login_page.loginSucessMessage('Login realizado')
    login_page.wellcomeMessage(email)
})