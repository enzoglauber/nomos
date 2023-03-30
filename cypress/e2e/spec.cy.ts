describe('Page Deputies', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  // it('displays full header', () => {
  //   cy.get('nav .desktop-menu').should('be.visible')
  //   cy.get('nav .mobile-menu').should('not.be.visible')
  // })
  it('should visit path deputies', () => {
    cy.visit('/deputados')
    cy.get('#deputy').type('joi{enter}')
  })

  // it('should typing in text deputy field', () => {
  // })
  /**
   *  it('sets auth cookie when logging in via form submission', function () {
    // destructuring assignment of the this.currentUser object
    const { username, password } = this.currentUser

    cy.visit('/login')

    cy.get('input[name=username]').type(username)

    // {enter} causes the form to submit
    cy.get('input[name=password]').type(`${password}{enter}`)

    // we should be redirected to /dashboard
    cy.url().should('include', '/dashboard')

    // our auth cookie should be present
    cy.getCookie('your-session-cookie').should('exist')

    // UI should reflect this user being logged in
    cy.get('h1').should('contain', 'jane.lane')
  })
   */
})
