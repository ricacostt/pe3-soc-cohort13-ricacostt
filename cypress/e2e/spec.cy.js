describe('visit the live website', () => {
  it('passes', () => {
    cy.visit('https://gnewss.netlify.app/')
  })
})

describe('search bar functionality', () => {
  
  it('search bar functionality', function() {
    cy.visit('https://gnewss.netlify.app/')
cy.get('.input').click().type('Turkey')
it('click the search button'), () =>{
  cy.get('.btn').click()
}
it('click Gnews logo'), () =>{
  cy.get('.flex-1 > .btn').click()
}
  });
})