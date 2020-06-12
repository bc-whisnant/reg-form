/* eslint-disable*/
import { localHost, submitBtn } from '../../src/utils'

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
