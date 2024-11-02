/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {

    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos da obrigatóriosd e envia o formulário', function () {
        const longText = 'teste teste teste testeteste teste teste teste teste teste teste testetesteteste teste  teste'

        cy.get('#firstName').type('Adriano')
        cy.get('#lastName').type('Saadeh')
        cy.get('#email').type('grumalegal@gmail.com')
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
        cy.get('#firstName').type('Adriano')
        cy.get('#lastName').type('Saadeh')
        cy.get('#email').type('www.grumalegalgmail.com')
        cy.get('#open-text-area').type('Testando')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    it('campo telefone continua vazio quando preenchido com valor não numérico', function () {
        cy.get('#phone')
            .type('abcdef')
            .should('have.value', '')
    })

    it('campo telefone obrigatório vazio quando preenchido com valor não numérico', function () {
        cy.get('#firstName').type('Adriano')
        cy.get('#lastName').type('Saadeh')
        cy.get('#email').type('grumalegal@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Testando')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome', () => {
        cy.get('#firstName')
            .type('Adriano')
            .should('have.value', 'Adriano')
            .clear()
            .should('have.value', '')

        cy.get('#lastName')
            .type('Adriano')
            .should('have.value', 'Adriano')
            .clear()
            .should('have.value', '')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado', () => {
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })

    it('envia o formuário com sucesso usando o cy.contains ao invés do cy.get', () => {
        const longText = 'teste teste teste testeteste teste teste teste teste teste teste testetesteteste teste  teste'

        cy.get('#firstName').type('Adriano')
        cy.get('#lastName').type('Saadeh')
        cy.get('#email').type('grumalegal@gmail.com')
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.contains('button','Enviar').click()

        cy.get('.success').should('be.visible')
    })
})