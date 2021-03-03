import React, {useState, useEffect} from 'react'
import { Item, Grid, Segment, Header } from 'semantic-ui-react'
import {getExploreArticles} from '../modules/dataCenter'

const ExploreList = () => {
  const [articles, setArticles] = useState([])

  const fetchData = async () => {
    let response = await getExploreArticles()
    setArticles(response)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const articleList = articles.map((article, i) => {
    return (
      <Item data-cy="explore-item" data-id={`explore-item-${i+1}`} key={i+1} >
        <Item.Content>
          <Item.Header data-cy="title">{article.title }</Item.Header>
          <Item.Meta data-cy="date">Published on: {article.date}</Item.Meta>
          <Item.Description data-cy="teaser">{article.teaser}</Item.Description>
        </Item.Content>
      </Item>
    )
  })

  return (
    <Segment textAlign="left">
      <Header className="explore-list-header">Latest Stories</Header>
      <Item.Group data-cy="explore-list">
        {articleList}
      </Item.Group>
    </Segment>
  )
}

export default ExploreList
