describe('Front page displays articles based on location', () => {
  describe('successfully', () => {
    beforeEach(() => {
      cy.server()
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/articles?article_type=story',
        response: 'fixture:locationStoriesList.json'
      })
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/articles?article_type=experience',
        response: 'fixture:locationExperiencesList.json'
      })
      cy.visit('/')
    })

    it('displays a list of experience articles', () => {
      cy.get('[data-cy="experience-wrapper"]')
        .find('[data-cy="article-item"]').should('have.length', 3)
    })

    it('displays the right content in experiences list', () => {
      cy.get('[data-cy="experience-wrapper"]').within(() => {
        cy.get('[data-id="article-item-1"]').within(() => {
          cy.get('[data-cy="title"]').should('contain', '')
          cy.get('[data-cy="date"]').should('contain', '')
          cy.get('[data-cy="teaser"]').should('contain', '')
        })
      })
    })

    it('displays a list of story articles', () => {
      cy.get('[data-cy="story-wrapper"]')
        .find('[data-cy="article-item"]').should('have.length', 3)
    })

    it('displays the right content in stories list', () => {
      cy.get('[data-cy="story-wrapper"]').within(() => {
        cy.get('[data-id="article-item-1"]').within(() => {
          cy.get('[data-cy="title"]').should('contain', '')
          cy.get('[data-cy="date"]').should('contain', '')
          cy.get('[data-cy="teaser"]').should('contain', '')
        })
      })
    })
  })
})