describe('OrangeHRM Login Feature', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('TC_001 - Login with valid username and valid password', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard').should('be.visible')
  })

  it('TC_002 - Login with invalid username and valid password', () => {
    cy.get('input[name="username"]').type('Adit')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC_003 - Login with valid username and invalid password', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin12')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC_004 - Login with invalid username and invalid password', () => {
    cy.get('input[name="username"]').type('Admi')
    cy.get('input[name="password"]').type('admin12')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC_005 - Login with empty username and valid password', () => {
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('#app form > div:nth-child(2) > div').should('contain.text', 'Required')
  })

  it('TC_006 - Login with valid username and empty password', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('button[type="submit"]').click()
    cy.get('#app form > div:nth-child(3) > div').should('contain.text', 'Required')
  })

  it('TC_007 - Login with empty username and empty password', () => {
    cy.get('button[type="submit"]').click()
    cy.get('#app form > div:nth-child(2) > div').should('contain.text', 'Required') 
    cy.get('#app form > div:nth-child(3) > div').should('contain.text', 'Required')
  })

  it('TC_008 - Login with valid username and valid password while logged in on another device', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard').should('be.visible')
    // NOTE: login biasa karena Cypress tidak bisa simulasi multi device
  })

  it('TC_009 - Login with capslock is on', () => {
    cy.get('input[name="username"]').type('ADMIN')
    cy.get('input[name="password"]').type('ADMIN123')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC_010 - Login by pressing Enter instead of clicking the "Login" button', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123{enter}')
    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard').should('be.visible')
  })

})