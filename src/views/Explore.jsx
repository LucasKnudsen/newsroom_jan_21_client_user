import React from 'react'
import ExploreList from '../components/ExploreList'
import { Header, Grid, Icon} from 'semantic-ui-react'

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
        <ExploreList />
      </Grid.Row> 
    </Grid>
  )
}

export default Explore