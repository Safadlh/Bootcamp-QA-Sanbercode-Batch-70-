import loginPagePOM from "../support/pageObjects/loginPagePOM"
import loginDataPOM from "../fixtures/loginDataPOM.json"

describe('Scenario Verifikasi Fungsi Login POM', () => {
    beforeEach(() => {
    loginPagePOM.visitPOM()
  })

    it('TC_001 - Login with valid username and valid password', () => {
    // cy.get('input[name="username"]').type('Admin')
    // cy.get('input[name="password"]').type('admin123')
    // cy.get('button[type="submit"]').click()
    // cy.url().should('include', '/dashboard')
    // cy.contains('Dashboard').should('be.visible')
    
    loginPagePOM.inputUsername(loginDataPOM.validUsername)
    loginPagePOM.inputPassword(loginDataPOM.validPassword)
    loginPagePOM.clickLgnBtn()
    loginPagePOM.assertionLogin()
  });

  it('TC_002 - Login with invalid username and valid password', () => {
    // cy.get('input[name="username"]').type('Adit')
    // cy.get('input[name="password"]').type('admin123')
    // cy.get('button[type="submit"]').click()
    // cy.contains('Invalid credentials').should('be.visible')

    loginPagePOM.inputUsername(loginDataPOM.invalidUsername)
    loginPagePOM.inputPassword(loginDataPOM.validPassword)
    loginPagePOM.clickLgnBtn()
    loginPagePOM.assertionLoginFailed()
  })

  it('TC_003 - Login with valid username and invalid password', () => {
    // cy.get('input[name="username"]').type('Admin')
    // cy.get('input[name="password"]').type('admin12')
    // cy.get('button[type="submit"]').click()
    // cy.contains('Invalid credentials').should('be.visible')

    loginPagePOM.inputUsername(loginDataPOM.validUsername)
    loginPagePOM.inputPassword(loginDataPOM.invalidPassword)
    loginPagePOM.clickLgnBtn()
    loginPagePOM.assertionLoginFailed()
  })

  it('TC_004 - Login with invalid username and invalid password', () => {
    // cy.get('input[name="username"]').type('Adit')
    // cy.get('input[name="password"]').type('admin12')
    // cy.get('button[type="submit"]').click()
    // cy.contains('Invalid credentials').should('be.visible')

    loginPagePOM.inputUsername(loginDataPOM.invalidUsername)
    loginPagePOM.inputPassword(loginDataPOM.invalidPassword)
    loginPagePOM.clickLgnBtn()
    loginPagePOM.assertionLoginFailed()
  })

  it('TC_005 - Login with empty username and valid password', () => {
    // cy.get('input[name="password"]').type('admin123')
    // cy.get('button[type="submit"]').click()
    // cy.get('#app form > div:nth-child(2) > div').should('contain.text', 'Required')

    loginPagePOM.inputPassword(loginDataPOM.invalidPassword)
    loginPagePOM.clickLgnBtn()
    loginPagePOM.assertionLoginRequired()
  })
});