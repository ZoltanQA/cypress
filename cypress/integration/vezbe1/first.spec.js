describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
    it('Visits the Kitchen Sink', function() {
        cy.visit('https://example.cypress.io')
        cy.contains("type").click()

        cy.url().should("include", "/commands/actions")
    })
    it('Galery app check Login', function() {
        cy.visit('/')
        cy.contains("Login").click()
        cy.url().should("include", "/login")
      })
      it('Galery app check Register', function() {
        cy.visit('/')
        cy.contains("Register").click()
        cy.url().should("include", "/register")
      })
      it.only('Galery app check Login with data', function() {
        cy.visit('/')
        cy.contains("Login").click()
        cy.get('input[id="email"]').type("zoki.juhas@yahoo.com")
        cy.get('input[id="password"]').type("vivify12")

        cy.get("button[type=submit]")
      })
  })




