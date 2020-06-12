/* eslint-disable*/
import { localHost, regForm, firstName, lastName, email, submitBtn } from '../../src/utils'

describe('Form shows up', () => {
  it('Form shows up with all fields and submits correctly', () => {
    cy.visit(localHost)
    cy.get(regForm)
    cy.get(firstName).find('input').type('Testing')
    cy.get(lastName).find('input').type('Testing')
    cy.get(email).find('input').type('testing@gmail.com')
    cy.get(submitBtn).click()
    cy.get('h3').contains('Your information has been submitted')
  })
})
