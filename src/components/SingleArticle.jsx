import React, { useEffect } from 'react';
import { Container, Header, Segment, Button, Image } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { getSingleArticle } from '../modules/articlesDataModule'
import logo from '../assets/mainLogo.png'

const SingleArticle = () => {
  const history = useHistory()
  const { id } = useParams()
  const { content } = useSelector(state => state)
  const { errorMessage } = useSelector(state => state)

  useEffect(() => {
    const fetchData = async () => {
      await getSingleArticle(id)
    }
    fetchData()
  }, [id])

  return (
    <Segment textAlign="center" padded>
      <Image className="logo" as='a' alt="logo" src={logo} href="/" data-cy="logo" />
      <Container textAlign="left" text>
        <Segment stacked padded >
          {!errorMessage ? (
            <>
              <Header as="h1" data-cy="article-header" >
                {content.title}
                <Header.Subheader data-cy="article-meta">
                  Published: {content.date}
                </Header.Subheader>
                <Header as="h4" data-cy="article-teaser">{content.teaser}</Header>
              </Header>
              <p data-cy="article-body">{content.body}</p>
            </>
          ) : (
              <>
                <Header as="h2" data-cy="not-found">{errorMessage}</Header>
                <Button color="teal" data-cy="back-button" onClick={() => history.goBack()}>Go back?</Button>
              </>
            )}
        </Segment>
      </Container >
    </Segment>
  )
}

export default SingleArticle
