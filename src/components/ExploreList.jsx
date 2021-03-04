import React, { useState, useEffect } from 'react'
import { Item, Segment, Header, Message } from 'semantic-ui-react'
import { getExploreArticles } from '../modules/articlesDataModule'
import { useSelector } from 'react-redux'

const ExploreList = () => {
  const [articles, setArticles] = useState([])
  const [errorMessage, setErrorMessage] = useState()
  const { articleType } = useSelector(state => state)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await getExploreArticles(articleType)
        setArticles(response)
      } catch (error) {
        setErrorMessage(error.message)
      }
    }
    fetchData()
  }, [articleType])

  const articleList = articles.map((article, i) => {
    return (
      <Item as='a' href={`http://localhost:3001/articles/${article.id}`} data-cy="explore-item" data-id={`explore-item-${i + 1}`} key={i + 1} >
        <Item.Content>
          <Item.Header data-cy="title">{article.title}</Item.Header>
          <Item.Meta data-cy="date">Published on: {article.date}</Item.Meta>
          <Item.Description data-cy="teaser">{article.teaser}</Item.Description>
        </Item.Content>
      </Item>
    )
  })

  return (
    <Segment textAlign="left">
      <Header className="explore-list-header" data-cy="explore-list-header">
        Latest {articleType === 'story' ? 'Stories' : 'Experiences'}
      </Header>
      {errorMessage ? (
        <Message data-cy="error-message" header={errorMessage} />
      ) : (
          <Item.Group divided data-cy="explore-list">
            {articleList}
          </Item.Group>
        )}
    </Segment>
  )
}

export default ExploreList
