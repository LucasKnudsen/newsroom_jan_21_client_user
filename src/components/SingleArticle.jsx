import React, { useEffect, useState } from 'react';
import { Container, Header, Segment, Image } from 'semantic-ui-react'
import { useParams, useHistory } from 'react-router-dom'
import { getSingleArticle } from '../modules/articlesDataModule'
import logo from '../assets/mainLogo.png'

const SingleArticle = () => {
  const history = useHistory()
  const { id } = useParams()
  const [content, setContent] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      let response = await getSingleArticle(id)
      setContent(response)
    }
    fetchData()
  }, [id])

  return (
    <Segment textAlign="center" padded>
      <Image className="logo" as='a' alt="logo" src={logo} data-cy="back-button" onClick={() => history.goBack()} />
      <Container textAlign="left" text>
        <Segment padded >
          <Header as="h1" data-cy="article-header" >
            {content.title}
            <Header.Subheader data-cy="article-meta">
              Published: {content.date}
            </Header.Subheader>
            <Header as="h4" data-cy="article-teaser">{content.teaser}</Header>
          </Header>
          <p data-cy="article-body">{content.body}</p>
        </Segment>
      </Container >
    </Segment>
  )
}

export default SingleArticle
