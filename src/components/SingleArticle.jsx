import React, { useEffect } from 'react';
import { Container, Header, Segment, Button, Grid } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { getSingleArticle } from '../modules/articlesDataModule'

const SingleArticle = () => {
  const history = useHistory()
  const { id } = useParams()
  const { content } = useSelector(state => state)
  const { errorMessage } = useSelector(state => state)

  useEffect(() => {
    getSingleArticle(id)
  }, [id])

  return (
    <Grid className="main-view">
      <Container textAlign="left" text>
        <Segment stacked padded >
          {!errorMessage ? (
            <>
              <Header as="h1" data-cy="article-header" >
                {content.title}
                <Header.Subheader style={{ textTransform: 'capitalize' }} data-cy="article-meta">
                  Published: {content.date}
                  <br />
                  Category: {content.category}
                </Header.Subheader>
                <Header as="h4" data-cy="article-teaser">{content.teaser}</Header>
              </Header>
              <p data-cy="article-body">{content.body}</p>
            </>
          ) : (
              <>
                <Header as="h2" data-cy="not-found">{errorMessage}</Header>
              </>
            )}
          <Button color="blue" data-cy="back-button" onClick={() => history.goBack()}>Go back?</Button>
        </Segment>
      </Container >
    </Grid>
  )
}

export default SingleArticle
