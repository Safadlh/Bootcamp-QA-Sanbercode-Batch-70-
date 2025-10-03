describe('Tugas 14 - Scenario Locator', () => {
  it('Cari locator', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').should('be.visible')
    cy.get('[name="password"]').should('be.visible')
    cy.get('button[type="submit"]').should('contain','Login')
    cy.get('.orangehrm-login-branding > img').should('be.visible')
    cy.get('.orangehrm-login-forgot > .oxd-text').should('exist')
    cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').should('be.visible')
    cy.get('.orangehrm-copyright-wrapper > :nth-child(2)').should('be.visible')

    // login
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    // dashboard - cek elemen
    cy.get('.oxd-topbar-header-title').should('contain','Dashboard')
    cy.contains('.oxd-main-menu-item', 'Dashboard').should('be.visible')
    cy.get('.oxd-glass-button').should('exist')
    cy.get('.oxd-userdropdown-name').should('be.visible')
    cy.get('.oxd-topbar-body-nav-slot > .oxd-icon-button').should('be.visible')
    cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header').should('be.visible')
  })
})