describe('Displays list of story articles', () => {
  beforeEach(() => {
    cy.server()
  })
  describe('successfully', () => {
    beforeEach(() => {
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/articles?article_type=story',
        response: 'fixture:storiesList.json'
      })
      cy.visit('/explore')
    })

    it('displays the page header', () => {
      cy.get('[data-cy="explore-header"]').should('contain', 'Explore')
    })

    it('displays the list header', () => {
      cy.get('[data-cy="explore-list-header"]').should('contain', 'Latest Stories')
    })

    it('renders a list of 5 articles', () => {
      cy.get('[data-cy="explore-list"]').find('[data-cy="article-item"]').should('have.length', 5)
    })

    it('articles are displayed containing expected information', () => {
      cy.get('[data-cy="explore-list"]').within(() => {
        cy.get('[data-id="article-item-1"]').within(() => {
          cy.get('[data-cy="title"]').should('contain', 'Story Test 5')
          cy.get('[data-cy="teaser"]').should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
          cy.get('[data-cy="date"]').should('contain', 'Published on: 2021-03-09')
        })
      })
    })
  })

  describe('unsuccessfully with no connection', () => {
    beforeEach(() => {
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/articles?article_type=story',
        response: {
          message: "Request failed with status code 500"
        },
        status: 500
      })
      cy.visit('/explore')
    })

    it('displays an error message', () => {
      cy.wait(1000)
      cy.get('[data-cy="error-message"]').should('contain', 'Request failed with status code 500')
    })
  })
})
