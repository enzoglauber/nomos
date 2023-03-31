describe('Page Deputies', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('/deputados')
    
  })

  it('should visit path deputies and load data', () => {
    cy.get('[data-testid="deputy-list"]')
      .children()
      .its('length')
      .should('be.gte', 1)
      .and('be.lte', 10)
  })

  it("should change current page and change it", () => {
    const container = '[data-testid="pagination"]'
    cy.get('button[aria-label="page 1"]')
      .should('have.attr', 'aria-current', 'true')

    cy.get(container)
      .find('[aria-label="Go to page 2"]')
      .click();

    cy.get('button[aria-label="page 2"]')
      .should('have.attr', 'aria-current', 'true')
  });

  it("should check items per page and change it", () => {
    const select = '[data-testid="pagination-select"]'
    cy.get(select).children('input[aria-hidden="true"]').should('have.value', '10');

    
    cy.get(select).click();
    cy.get('ul[role="listbox"]').children('li[data-value="8"]').click()

    cy.get(select).children('input[aria-hidden="true"]').should('have.value', '8');
    cy.get('[data-testid="deputy-list"]').children().its('length').should('be.equal', 8)
  });

  it("should type into filters", () => {
    // cy.intercept('GET', '**/api/v2/deputados', (req) => {
    //   delete req.headers['if-modified-since']
    //   delete req.headers['if-none-match']
    //   delete req.headers['proxy-connection']

    //   req.continue(res => {
    //     cy.should('be.greaterThan', res.headers['x-total-count'])
    //   })
    // }).as('getSettings')
    
    // cy.wait('@getSettings')     

    // cy.wait('@getDeputies')
    //   .its('request.headers')
    //   .should('have.property', 'x-total-count')
    //   .then(res => {
    //     cy.should('be.greaterThan', parseInt(res))
    //   })
    cy.get('[data-testid="deputies-filter"]')
      .find('#uf')
      .type('RJ{enter}')
    cy.get('[data-testid="deputy-list"]').children().its('length').should('be.equal', 10)

    cy.get('[data-testid="deputies-filter"]')
      .find('#party')
      .type('PL{enter}')
    cy.get('[data-testid="deputy-list"]').children().its('length').should('be.equal', 10)
    
    cy.get('[data-testid="deputies-filter"]')
      .find('#deputy')
      .type('h{enter}')
    cy.get('[data-testid="deputy-list"]').children().its('length').should('be.equal', 2)
  });


  // it('should typing in text deputy field', () => {
  // })
  /**
   * 
   * 
   *  expect(response).to.have.property('headers')
   * 
   * cy.visit('http://localhost:3000/admin')
   * cy.url().should('match', /login/)
   * 
   * cy.get('button[aria-label="page 1"]')
      // .invoke('attr', 'aria-current')
      // .should('eq', 'true')
    .should('have.attr', 'aria-current', 'true')

   *  cy.get('#launch-list').its('length').should('be.gte', 1).and('be.lt', 20)
   * 
   * 
   *  it('sets auth cookie when logging in via form submission', function () {
    // destructuring assignment of the this.currentUser object
    const { username, password } = this.currentUser

    cy.visit('/login')

    cy.get('input[name=username]').type(username)

    // {enter} causes the form to submit
    cy.get('input[name=password]').type('${password}{enter}')

    // we should be redirected to /dashboard
    cy.url().should('include', '/dashboard')

    // our auth cookie should be present
    cy.getCookie('your-session-cookie').should('exist')

    // UI should reflect this user being logged in
    cy.get('h1').should('contain', 'jane.lane')
  })
   */
})
