/// <reference types = "cypress"/>

describe('todo mvc tests', () => {
  let mainData
  
  before(() => {
    cy.fixture('getData').then(function (data){
        mainData = data
    }) 

    cy.visit('/')
  })

  afterEach(() => {
    cy.screenshot()
  })

  context('Add Items', () => {
      it('Add item', () => {
        cy.get('.new-todo').type(mainData.firstItem + '{enter}')
        cy.get('label').should('include.text', mainData.firstItem)
        cy.get('.toggle').should('be.checked')
      })
  })
})