describe('Displays list of experience articles', () => {
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
      cy.visit('/')
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/articles?article_type=experience',
        response: 'fixture:experiencesList.json'
      })
      cy.get('[data-cy="experience-button"]').click()
    })

    it('displays the page header', () => {
      cy.get('[data-cy="explore-header"]').should('contain', 'Explore')
    })

    it('displays the list header', () => {
      cy.get('[data-cy="explore-list-header"]').should('contain', 'Latest Experiences')
    })

    it('renders a list of 5 articles', () => {
      cy.get('[data-cy="explore-list"]').find('[data-cy="explore-item"]').should('have.length', 5)
    })

    it('articles are displayed containing expected information', () => {
      cy.get('[data-cy="explore-list"]').within(() => {
        cy.get('[data-id="explore-item-1"]').within(() => {
          cy.get('[data-cy="title"]').should('contain', 'Experience Test 5')
          cy.get('[data-cy="teaser"]').should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
          cy.get('[data-cy="date"]').should('contain', 'Published on: 2021-03-03')
        })
      })
    })
  })

  describe('unsuccessfully with no connection', () => {
    beforeEach(() => {
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/articles?article_type=story',
        response: 'fixture:storiesList.json'
      })
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/articles?article_type=experience',
        response: {
          message: "Request failed with status code 500"
        },
        status: 500
      })
      cy.visit('/')
      cy.get('[data-cy="experience-button"]').click()
    })

    it('displays an error message', () => {
      cy.get('[data-cy="error-message"]').should('contain', 'Request failed with status code 500')
    })
  })
})
