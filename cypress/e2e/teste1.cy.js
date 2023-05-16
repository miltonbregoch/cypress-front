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
        cy.get('.toggle').should('not.be.checked')
      })

      it('Add new item and check', () => {
        cy.get('.new-todo').type(mainData.secondItem + '{enter}')
        cy.get('label').should('include.text', mainData.secondItem)
        cy.get(':nth-child(1) > .view > .toggle').click()
        cy.get(':nth-child(1) > .view > .toggle').should('be.checked')
      })
  });

  context('Clear completed', () => {
    it('Clear', () => {
      cy.get('.clear-completed').click()
    })
  })
})