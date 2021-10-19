describe('Admin Panel', () => {
  it('login', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[name=email]').type('demo@devias.io');
    cy.get('[name=password]').type('123');
    cy.get('button[type=submit]').click();
    cy.location('pathname').should('equal', '/login');
  });
});
