describe('client displays single article', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/articles?article_type=story',
      response: 'fixture:storiesList.json'
    })
  })
  describe('successfully with valid article id', () => {
    beforeEach(() => {
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/articles/**',
        response: 'fixture:singleArticle.json'
      })
      cy.visit('/')
      cy.get('[data-id="explore-item-4"]').click()
    })

    it('links to expected URI', () => {
      cy.url().should('be.equal', 'http://localhost:3001/articles/2')
    })

    it('displays expected content', () => {
      cy.get('[data-cy="article-header"]').should('contain', 'Story Test 2')
      cy.get('[data-cy="article-meta"]').should('contain', 'Published: 2021-03-03')
      cy.get('[data-cy="article-teaser"]').should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
      cy.get('[data-cy="article-body"]').should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi. Fringilla est ullamcorper eget nulla facilisi etiam. Et tortor consequat id porta nibh venenatis cras sed felis. Arcu dui vivamus arcu felis. Vitae semper quis lectus nulla at. Neque vitae tempus quam pellentesque nec nam. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. A iaculis at erat pellentesque. Neque volutpat ac tincidunt vitae semper quis lectus nulla at.')
    })

    it('sends user back to main view with logo click', () => {
      cy.get('[data-cy="logo"]').click()
      cy.url().should('be.equal', 'http://localhost:3001/')
    })
  })
  describe('unsuccessfully with invalid article id', () => {
    beforeEach(() => {
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/articles/**',
        response: {
          message: "Article not found."
        }, status: 404
      })
      cy.visit('/')
      cy.visit('/articles/1337')
    })

    it('displays an error message', () => {
      cy.get('[data-cy="not-found"]').should('contain', 'Article not found.')
    })
    
    it('sends user back to previous view with back button', () => {
      cy.get('[data-cy="back-button"]').click()
      cy.url().should('be.equal', 'http://localhost:3001/')
    })
  })
})