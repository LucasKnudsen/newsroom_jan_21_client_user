import React, { useState } from 'react'
import ExploreList from '../components/ExploreList'
import { Header, Grid, Icon, Button } from 'semantic-ui-react'

const Explore = () => {
  const [articleType, setArticleType] = useState('story')

  return (
    <Grid>
      <Grid.Row centered textAlign="center">
        <Header className="explore-header">
          <Icon circular name="map signs" size="tiny" />
          <Header.Content>Explore</Header.Content>
        </Header>
      </Grid.Row>
      <Grid.Row centered>
        <Button data-cy="story-button" onClick={() => setArticleType('story')}>Stories</Button>
        <Button data-cy="experience-button" onClick={() => setArticleType('experience')}>Experiences</Button>
      </Grid.Row>
      <Grid.Row centered>
        <ExploreList articleType={articleType} />
      </Grid.Row>
    </Grid>
  )
}

export default Explore