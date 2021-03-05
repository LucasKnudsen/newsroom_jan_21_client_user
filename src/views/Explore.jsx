import React from 'react'
import ExploreList from '../components/ExploreList'
import { Header, Grid, Icon, Button } from 'semantic-ui-react'
import store from '../state/store/configureStore'

const Explore = () => {

  return (
    <Grid className="main-view">
      <Grid.Row centered textAlign="center">
        <Header className="main-header" data-cy="explore-header">
          <Icon circular name="map signs" size="tiny" />
          <Header.Content>Explore</Header.Content>
        </Header>
      </Grid.Row>
      <Grid.Row centered>
        <Button color="blue" data-cy="story-button" onClick={() => store.dispatch({ type: "SET_ARTICLE_TYPE", payload: 'story'})}>Stories</Button>
        <Button color="blue" data-cy="experience-button" onClick={() => store.dispatch({ type: "SET_ARTICLE_TYPE", payload: 'experience' })}>Experiences</Button>
      </Grid.Row>
      <Grid.Row centered>
        <ExploreList />
      </Grid.Row>
    </Grid>
  )
}
export default Explore
