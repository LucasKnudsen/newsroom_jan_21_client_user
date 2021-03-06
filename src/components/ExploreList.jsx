import React, { useEffect } from 'react'
import { Item, Segment, Header, Message } from 'semantic-ui-react'
import ArticleList from './ArticleList'
import { getExploreArticles, getByCategory } from '../modules/articlesDataModule'
import { useSelector } from 'react-redux'

const ExploreList = () => {
  const { errorMessage } = useSelector(state => state)
  const { articleType } = useSelector(state => state)
  const { articles } = useSelector(state => state)

  useEffect(() => {
    getExploreArticles(articleType)
  }, [articleType])

  return (
    <Segment.Group>
      <Segment>
        
      </Segment>
      <Segment textAlign="left">
        <Header className="sub-header" data-cy="explore-list-header">
          Latest {articleType === 'story' ? 'Stories' : 'Experiences'}
        </Header>
        {!errorMessage ? (
          <Item.Group divided data-cy="explore-list">
            <ArticleList articles={articles} />
          </Item.Group>
        ) : (
            <Message data-cy="error-message" header={errorMessage} />
          )}
      </Segment>
    </Segment.Group>
  )
}

export default ExploreList
