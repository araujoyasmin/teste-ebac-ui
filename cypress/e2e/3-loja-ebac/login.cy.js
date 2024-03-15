/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('yasmin.teste@ebac.com.br')
        cy.get('#password').type('xofcis-Minru8-tyjcyf')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, yasmin.teste')
    })
})