describe('login Flow Invalid Credentials', () => {
   beforeEach(() => {
    cy.visit('http://localhost:5173')
   })
 
  it('should display login form', () => {
    cy.get('form'). should('be.visible')
  })

  it('should login with invalid credentials', () => {
    cy.get('input[type="email"').type('zero_cypress@dnc.com.br')
    cy.get('input[type="password"').type('@dNceact474#')
    cy.get('button[type="submit"').click()
    cy.contains('Email e/ou senha inválidos').should('be.visible')
  })


})