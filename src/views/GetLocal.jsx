import React, { useEffect } from 'react'
import { Grid, Item, Header } from 'semantic-ui-react'
import ArticleList from '../components/ArticleList'
import { getLocationArticles } from '../modules/articlesDataModule'
import { useSelector } from 'react-redux'

const GetLocal = () => {
  const { articles } = useSelector(state => state)
  const { message } = useSelector(state => state)
  const experienceArticles = articles.filter(article => article.article_type === 'experience')
  const storyArticles = articles.filter(article => article.article_type === 'story')

  useEffect(() => {
    getLocationArticles()
  }, [])

  return (
    <Grid divided className="main-view" columns={2}>
      <Grid.Column width={10}>
        <Header dividing color="blue" className="main-header">
          Experiences
          <Header.Subheader data-cy="your-location">{message}</Header.Subheader>
        </Header>
        <Item.Group data-cy="experience-wrapper">
          <ArticleList articles={experienceArticles} />
        </Item.Group>
      </Grid.Column>
      <Grid.Column textAlign="center" width={6}>
        <Header dividing className="sub-header main-story">Stories</Header>
        <Item.Group data-cy="story-wrapper">
          <ArticleList articles={storyArticles} />
        </Item.Group>
      </Grid.Column>
    </Grid>
  )
}

export default GetLocal
