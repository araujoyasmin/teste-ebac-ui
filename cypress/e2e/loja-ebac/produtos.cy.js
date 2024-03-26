/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar lista de produtos', () => {
        produtosPage.buscarProdutoLista()

        cy.get('#tab-title-description > a').should('exist')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a pagina do produto', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.visitarProduto(produto)
        cy.get('.product_title').should('contain', produto)

    });

    it('Deve adicionar produto ao carrinho', () => {
        let produto = 'Ingrid Running Jacket'
        let qtd = 5
        produtosPage.buscarProduto(produto)
        produtosPage.addProdutoCarrinho('M', 'Orange', qtd)

        cy.get('.woocommerce-message').should('contain', qtd +' × “Ingrid Running Jacket” foram adicionados no seu carrinho.')

    });

    it.only('Deve adicionar produto ao carrinho com massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade)

            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })
        

    });
});