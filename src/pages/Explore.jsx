import React from 'react'
import ExploreList from '../components/ExploreList'
import { Header, Grid} from 'semantic-ui-react'

const Explore = () => {
  return (
    <Grid>
      <Grid.Row centered textAlign="center">
        <Header className="explore-header">Explore</Header>
      </Grid.Row>
      <Grid.Row centered>
        <ExploreList />
      </Grid.Row> 
    </Grid>
  )
}

export default Explore
