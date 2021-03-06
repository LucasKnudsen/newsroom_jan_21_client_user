describe('can display articles based on category request', () => {
  describe('successfully', () => {
    beforeEach(() => {
      cy.server()
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/articles?article_type=story',
        response: 'fixture:storiesList.json'
      })
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/articles?category=**',
        response: "fixture:categoryList.json"
      })
      cy.visit('/explore')
      cy.get('[data-cy="event-category-button"]').click()
    })

    it('displays a list of 3 articles', () => {
      cy.get('[data-cy="explore-list"]').find('[data-cy="article-item"]').should('have.length', 3)
    })

    it('changes list header to display the selected category', () => {
      cy.get('[data-cy="explore-list-header"]').should('contain', 'Latest Events')
    })

    it('displays the expected articles in the list', () => {
      cy.get('[data-cy="explore-list"]').within(() => {
        cy.get('[data-id="article-item-1"]').within(() => {
          cy.get('[data-cy="title"]').should('contain', 'Story Test 4')
          cy.get('[data-cy="teaser"]').should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
          cy.get('[data-cy="date"]').should('contain', 'Published on: 2021-03-06')
        })
      })
    })
  })
  describe('unsuccessfully with no articles of that category', () => {
    beforeEach(() => {
      cy.server()
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/articles?article_type=story',
        response: 'fixture:storiesList.json'
      })
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/articles?category=events',
        response: {
          message: 'Unfortunately we did not find any articles with this category.'
        }
      })
      cy.visit('/explore')
      cy.get('[data-cy="event-category-button"]').click()
    })
  })
})