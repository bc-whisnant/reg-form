/* eslint-disable*/
const localHost = 'http://localhost:8080'
const regForm = '[data-cy=form]'
const firstName = '[data-cy=first_name]'
const lastName = '[data-cy=last_name]'
const email = '[data-cy=email]'
const submitBtn = '[data-cy=submit_btn]'

describe('Form throws errors when empty and submitted', () => {
  it('Throws errors when empty fields are submitted', () => {
    cy.visit(localHost)
    cy.get(submitBtn).click()
    cy.get('.error--text')
      .find('.v-messages__message')
      .then(error => {
        const errorCount = Cypress.$(error).length;
        expect(error).to.have.length(errorCount);
      })
  })
})
