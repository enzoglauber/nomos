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
  })

  it("should type into filters", () => {
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

    cy.get('[data-testid="deputies-filter"]')
      .find('#deputy')
      .clear()
      .type('helio{enter}')
    cy.get('[data-testid="deputy-list"]').children().its('length').should('be.equal', 1)
  })

  it("should click at button detail and redirec to detail page", () => {
    cy.get('[data-testid="deputies-filter"]')
      .find('#deputy')
      .clear()
      .type('helio lopes{enter}')
    cy.get('[data-testid="deputy-list"]').children().its('length').should('be.equal', 1)

    cy.get('[data-testid="deputy-list"]')
      .children()
      .first()
      .find('[data-testid="deputy-list-item-link"]')
      .click()
    
    cy.on("url:changed", (url) => {
      expect(url).to.contain("/deputados/204444")
    })
  })
})
