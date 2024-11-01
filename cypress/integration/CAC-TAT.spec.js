/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {

    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('verifica o título da aplicação', function () {
        cy.get('#firstName').type('Adriano')
        cy.get('#lastName').type('Saadeh')
        cy.get('#email').type('grumalegal@gmail.com')
        cy.get('#open-text-area').type('Testes')
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')

    })
})