describe('simple test suite a for checking with CI/CD', () => {
  it('simple static page check', () => {
    cy.visit('https://pablozenledger.github.io/frontend-cicd/')
    cy.wait(1500)
    cy.get('#contact > .w3-center').should('contain.text','Contact')
  })
})