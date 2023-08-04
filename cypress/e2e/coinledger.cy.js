/// <reference types="cypress" />
describe("Navigate to coinledger site", () => {
  beforeEach("open application", () => {
    cy.visit('https://coinledger.io/')
  })

  it("verify we are on landing page", () => {
    cy.wait(1000)
    cy.get('.primary-button-login').click()
    cy.wait(2500)
    cy.get('.main-wrapper')
      .children()
      .each(($child,index)=>{
        cy.wrap($child).then(($wrappedChild)=>{
          const title = $wrappedChild.prop('.zone-name-title -> h1')
          get(title).should('')
          cy.wait(1500)
        })
      })
  })
})
