Feature: Cadastro de usuário
    Eu como cliente
    Quero me cadastrar na aplicação
    Para realizar um pedido de compra

    Background: Acessar tela de Cadastro
        Given estou na tela de cadastro


    Scenario: Campo nome vazio
        When clico em Cadastrar
        Then recebo a mensagem "O campo nome deve ser prenchido" no cadastro

    Scenario: Campo e-mail vazio
        And preencho o nome
        When clico em Cadastrar
        Then recebo a mensagem "O campo e-mail deve ser prenchido corretamente" no cadastro

    Scenario: Campo email inválido
        And preencho o nome
        And preencho o email invalido
        When clico em Cadastrar
        Then recebo a mensagem "O campo e-mail deve ser prenchido corretamente" no cadastro

    Scenario: Campo senha vazio
        And preencho o nome
        And preencho o email valido
        When clico em Cadastrar
        Then recebo a mensagem "O campo senha deve ter pelo menos 6 dígitos" no cadastro


    Scenario: Campo senha inválido
        And preencho o nome
        And preencho o email valido
        And preencho a senha invalida
        When clico em Cadastrar
        Then recebo a mensagem "O campo senha deve ter pelo menos 6 dígitos" no cadastro

    Scenario: Cadastro de usuário com sucesso
        And preencho os dados validos
        When clico em Cadastrar
        Then cadastro realizado com sucesso