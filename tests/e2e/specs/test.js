// https://docs.cypress.io/api/introduction/api.html

describe('Tower tests', () => {
  it('contains the correct h1 and a UL', () => {
    cy.visit('https://meyer-tower.firebaseapp.com/#/')
    cy.contains('h1', 'Welcome to Star Wars DMV!')
    cy.contains('ul')
  });

})
