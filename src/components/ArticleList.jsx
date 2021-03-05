import React from 'react'
import { Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ArticleList = ({ articles }) => {
  let articleList
  
  if (articles){
  articleList = articles.map((article, i) => {
    return (
      <Item as={Link} to={`articles/${article.id}`} data-cy="article-item" data-id={`article-item-${i + 1}`} key={i + 1} >
        <Item.Content>
          <Item.Header data-cy="title">{article.title}</Item.Header>
          <Item.Meta data-cy="date">Published on: {article.date}</Item.Meta>
          <Item.Description data-cy="teaser">{article.teaser}</Item.Description>
        </Item.Content>
      </Item>
    )
  })}
  return (
    <>
      {articleList}
    </>
  )
}

export default ArticleList
