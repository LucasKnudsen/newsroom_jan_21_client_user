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
        url: 'http://localhost:3000/api/articles?category=events',
        response: "fixture:categoryList.json"
      })
      cy.visit('/explore')
      cy.get('[data-cy="event-category-button"]').click()
    })

    it('displays list of event articles when pressing the category button', () => {
      cy.get('[data-cy="explore-list"]').within(() => {
        cy.get('[data-id="article-item-1"]').within(() => {
          cy.get('[data-cy="title"]').should('contain', 'Story Test 5')
          cy.get('[data-cy="teaser"]').should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
          cy.get('[data-cy="date"]').should('contain', 'Published on: 2021-03-03')
            .and('contain', 'Category: event')
        })
      })
    })
  })
  describe('unsuccessfully with no articles of that category', () => {
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