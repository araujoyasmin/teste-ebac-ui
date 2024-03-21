
Cypress.Commands.add('login', (usuario, senha) => { 
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()

 })

Cypress.Commands.add('cadastro', (nome, sobrenome, email) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type('1234@yasmin')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)

    cy.get('.woocommerce-Button').click()
 })

Cypress.Commands.add('detalhes', (nome, sobrenome, usuario) => {
    cy.get('#account_first_name').clear()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').clear()
    cy.get('#account_last_name').type(sobrenome)
    cy.get('#account_display_name').clear()
    cy.get('#account_display_name').type(usuario)

    cy.get('.woocommerce-Button').click()
 })
