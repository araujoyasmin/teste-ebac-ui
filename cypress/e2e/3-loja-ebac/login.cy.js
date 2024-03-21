/// <reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    // afterEach(() => {
    //     cy.screenshot()
    // });

    it('Login com sucesso', () => {
        cy.get('#username').type('yasmin.teste@ebac.com.br')
        cy.get('#password').type('xofcis-Minru8-tyjcyf')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, yasmin.teste')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('yasmin1.teste@ebac.com.br')
        cy.get('#password').type('xofcis-Minru8-tyjcyf')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('yasmin.teste@ebac.com.br')
        cy.get('#password').type('xofcis-Minru8-tyjcyf2')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('exist')
    });

    it('Login com sucesso - massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, yasmin.teste')
    });

    it('Login com sucesso - usando fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario, {log: false})
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, yasmin.teste')
        })
    });

    it.only('login com sucesso - comando customizado', () => {
        cy.login(perfil.usuario, perfil.senha)
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, yasmin.teste')
    });
})