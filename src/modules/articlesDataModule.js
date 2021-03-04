import axios from 'axios'

const getExploreArticles = async () => {
  let response = await axios.get('/articles?article_type=story')
  return response.data.articles
}

export {getExploreArticles}