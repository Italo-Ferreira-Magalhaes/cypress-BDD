# 1 - Criar meu cenário 
Feature: Login
    Eu como cliente
    Quero fazer login na aplicação
    Para fazer um pedido de compra

    Background: Acessar tela de Login
        Given estou na tela de login

    Scenario: Login com campo e-mail vazio
        When clico em Login
        Then recebo a mensagem "E-mail inválido"

    Scenario: Login com campo senha vazio
        And preencho e-mail
        When clico em Login
        Then recebo a mensagem "Senha inválido"

    Scenario: Login com sucesso
        And preencho meus dados de acesso
        When clico em Login
        Then login realizado com sucesso