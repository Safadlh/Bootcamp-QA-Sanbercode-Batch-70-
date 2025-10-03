describe('Verifikasi Fungsi Login dengan Intercept', () => {

  it('TC_001 - Login with valid username and valid password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.intercept('GET', '**/api/v2/dashboard/employees/action-summary').as('dashboardSummary');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.wait('@dashboardSummary').its('response.statusCode').should('eq', 200);
    cy.url().should('include', '/dashboard');
  });
});