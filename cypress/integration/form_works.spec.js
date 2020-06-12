/* eslint-disable*/
const localHost = 'http://localhost:8080'
const regForm = '[data-cy=form]'
const firstName = '[data-cy=first_name]'
const lastName = '[data-cy=last_name]'
const email = '[data-cy=email]'
const submitBtn = '[data-cy=submit_btn]'

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
