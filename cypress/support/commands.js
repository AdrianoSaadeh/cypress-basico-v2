Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Adriano')
    cy.get('#lastName').type('Saadeh')
    cy.get('#email').type('grumalegal@gmail.com')
    cy.get('#open-text-area').type('Via comando customizado')
    cy.get('button[type="submit"]').click()
})