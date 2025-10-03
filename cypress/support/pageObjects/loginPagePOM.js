class loginPagePOM {
    visitPOM(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    inputUsername(username){
        cy.get('input[name="username"]').type(username)
    }
    inputPassword(password){
        cy.get('input[name="password"]').type(password)
    }
    clickLgnBtn(){
        cy.get('button[type="submit"]').click()
    }
    assertionLogin(){
        cy.url().should('include', '/dashboard')
        cy.contains('Dashboard').should('be.visible')
    }
    assertionLoginFailed(){
        cy.contains('Invalid credentials').should('be.visible')
    }
    assertionLoginRequired(){
        cy.get('#app form > div:nth-child(2) > div').should('contain.text', 'Required')
    }
}
export default new loginPagePOM()