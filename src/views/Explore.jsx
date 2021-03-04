import React from 'react'
import ExploreList from '../components/ExploreList'
import { Header, Grid, Icon, Button } from 'semantic-ui-react'
import store from '../state/store/configureStore'

const Explore = () => {

  return (
    <Grid>
      <Grid.Row centered textAlign="center">
        <Header className="explore-header" data-cy="explore-header">
          <Icon circular name="map signs" size="tiny" />
          <Header.Content>Explore</Header.Content>
        </Header>
      </Grid.Row>
      <Grid.Row centered>
        <Button data-cy="story-button" onClick={() => store.dispatch({ type: "SET_ARTICLE_TYPE", payload: 'story'})}>Stories</Button>
        <Button data-cy="experience-button" onClick={() => store.dispatch({ type: "SET_ARTICLE_TYPE", payload: 'experience' })}>Experiences</Button>
      </Grid.Row>
      <Grid.Row centered>
        <ExploreList />
      </Grid.Row>
    </Grid>
  )
}
export default Explore
