/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

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
})