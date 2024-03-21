/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Detalhes da conta', () => {
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then( login => {
            cy.login(login.usuario, login.senha)
        })
        
    });

    it('Alterar detalhes da conta com sucesso', () => {
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        var usuario = nome+sobrenome

        cy.detalhes(nome,sobrenome,usuario)
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});